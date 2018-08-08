const GALLERY_IMAGE_PATH = 'assets/images/gallery'

export class Image {
  filename: string
  title: string

  get imagePath() :string {
    return `${GALLERY_IMAGE_PATH}/${this.filename}`
  }

  constructor(fields?) {
    if(fields) {
      Object.assign(this, fields)
    }
  }
}

