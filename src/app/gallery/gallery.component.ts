import {Component, OnInit} from '@angular/core';
import {UploadService} from '../upload.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private uploadService: UploadService) {
  }

  ngOnInit() {
    this.uploadService.getUrls()
      .subscribe(
        (urls) => console.log(urls)
      );
  }

}
