const GALLERY_IMAGE_PATH = 'assets/images/gallery';

const SERVER_PORT = 3001;
const IMAGES_HOST = `http://localhost:${SERVER_PORT}/uploads`;

export class Image {
  // noinspection TsLint
  filename: string = 'default.png';
  // noinspection TsLint
  id: number = -1;
  // noinspection TsLint
  title: string = '';
  // noinspection TsLint
  liked: boolean = false;

  like(): void {
    this.liked = !this.liked;
  }

  get imagePath(): string {
    console.log('>>>', this.filename);
    return `${IMAGES_HOST}/${this.filename}`;
  }

  // get imagePath(): string {
  //   return `${GALLERY_IMAGE_PATH}/${this.filename}`;
  // }

  constructor(fields?) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}

// TODO: convert to service #2
