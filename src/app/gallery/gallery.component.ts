import {Component, OnInit} from '@angular/core';
import {UploadService} from '../upload.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images;

  constructor(private uploadService: UploadService) {
  }

  ngOnInit() {
    this.images = this.uploadService.getImagesData();
    console.log(this.uploadService.getImagesData());
  }

}
