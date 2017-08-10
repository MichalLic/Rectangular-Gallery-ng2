import {Component, OnInit} from '@angular/core';
import {UploadService} from '../upload.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: string;

  constructor(private uploadService: UploadService) {
  }

  ngOnInit() {
    this.uploadService.getUrls()
      .subscribe(
        (data) => {
          console.log(data);
          this.images = data;
        }
      );
  }

}
