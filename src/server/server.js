const express = require('express');
const app = express();
const multer = require('multer');
const bodyParser = require('body-parser')

const SERVER_PORT = 3001

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});

app.use("/uploads", express.static(__dirname + "public/uploads"));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/uploads")
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({dest: "uploads/", storage});

const images = [
  {
    id: 0,
    fileName: 'red_fish.jpg',
    title: 'Red Fish'
  },
  {
    id: 1,
    fileName: 'shark.jpg',
    title: 'Shark'
  }
];

let nextId = 2;

app.get('/images', function(req, res) {
  res.json({
    images
  });
});

app.get("/images/:id", function(req, res) {
  res.json({
    image: image.find(image => image.id === +req.params.id)
  });
});

app.post("/image", function(req, res) {
  const image = req.body.image;
  image.push(image);
  res.json(image);
});

app.post("/image-upload-file", upload.single("image"), function(req, res) {
  const newImage = {
    id: nextId++,
    // FIXME: fileName <---> filename
    fileName: req.file.filename,
    title: req.body.title
  };
  images.push(newImage);
  res.json(newImage);
});

app.listen(SERVER_PORT, function() {
  console.log(`server is running on ${SERVER_PORT}`)
});

