import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})

export class ImageAddComponent implements OnInit {
  imageName: string = null;

  @ViewChild('imageInput') imageInput;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  upload() {
    const nativeElement = this.imageInput.nativeElement;
    if (nativeElement.files && nativeElement.files[0]) {
      const formData = new FormData();
      formData.append('title', this.imageName);
      formData.append('image', nativeElement.files[0]);

      // TODO: implement server side
      this.http.post('http://localhost:3000/image-upload-file', formData).subscribe(data => {
        alert('success');
      });

    }
  }

}
