const GALLERY_IMAGE_PATH = 'assets/images/gallery'

export class Image {
  filename: string
  id:number
  title: string

  liked:Boolean

  like():void {
    this.liked = true
  }

  get imagePath() :string {
    return `${GALLERY_IMAGE_PATH}/${this.filename}`
  }

  constructor(fields?) {
    console.log('img entity is constructed', fields)
    if(fields) {
      Object.assign(this, fields)
    }
  }
}

