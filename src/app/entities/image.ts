const GALLERY_IMAGE_PATH = 'assets/images/gallery';
const IMAGES_HOST = 'http://localhost:3000/uploads';

export class Image {
  // noinspection TsLint
  filename: string = '';
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
    return `${GALLERY_IMAGE_PATH}/${this.filename}`;
  }

  constructor(fields?) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}

// TODO: convert to service #2
