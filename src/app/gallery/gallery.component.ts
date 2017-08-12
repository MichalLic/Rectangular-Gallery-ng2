import {Component, OnInit, trigger} from '@angular/core';
import {UploadService} from '../upload.service';
import {Image} from '../shared/image.model';
import {
  animate,
  state,
  style,
  transition
} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [
    trigger('list', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(200)
      ]),
      transition('* => void', [
        animate(400, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
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
