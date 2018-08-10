const GALLERY_IMAGE_PATH = 'assets/images/gallery'

export class Image {
  filename: string = ''
  id:number = -1
  title: string = ''
  liked:boolean = false;

  like():void {
    this.liked = !this.liked
  }

  get imagePath() :string {
    return `${GALLERY_IMAGE_PATH}/${this.filename}`
  }

  constructor(fields?) {
    if(fields) {
      Object.assign(this, fields)
    }
  }
}

// TODO: convert to service #2
