import {Component, OnInit} from '@angular/core';
import {UploadService} from '../upload.service';
import {Image} from '../shared/image.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: Image[];

  constructor(private uploadService: UploadService) {
  }

  ngOnInit() {
    this.images = this.uploadService.getImagesData();
    console.log(this.uploadService.getImagesData());
  }

  onDelete(id) {
    this.uploadService.deleteImage(id);
    this.images = this.uploadService.getImagesData();
  }

}
