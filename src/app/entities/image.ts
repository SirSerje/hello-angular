const GALLERY_IMAGE_PATH = 'assets/images/gallery'

export class Image {
  filename: string
  title: string

  liked:Boolean

  like():void {
    this.liked = true
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

