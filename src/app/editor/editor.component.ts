import {Component, OnInit} from '@angular/core';
import {UploadService} from '../upload.service';
import {ActivatedRoute, Params, Route} from '@angular/router';
import {Image} from '../shared/image.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  imageId: number;
  imageData: Image;
  borderImgColor: string;
  borderImgWidth: number;
  borderImgRadius: number;

  constructor(private uploadService: UploadService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.imageId = params['id'];
          console.log(this.imageId);
        }
      );
    this.setImgObject();
  }

  setImgObject() {
    this.imageData = this.uploadService.getSingleImageData(this.imageId);
    this.borderImgRadius = this.imageData.borderRadius;
    this.borderImgWidth = this.imageData.borderWidth;
    this.borderImgColor = this.imageData.borderColor;
  };


  borderColor(event) {
    console.log(event.target.value);
    this.borderImgColor = event.target.value;
  };

  borderWidth(event) {
    console.log(event.target.value);
    this.borderImgWidth = event.target.value;
  };

  borderRadius(event) {
    console.log(event.target.value);
    this.borderImgRadius = event.target.value;
  };

  onSave() {
    const imageStyle = {
      url: this.uploadService.getSingleImageData(this.imageId).url,
      borderColor: this.borderImgColor,
      borderWidth: this.borderImgWidth,
      borderRadius: this.borderImgRadius,
    };

    this.uploadService.updateImageData(this.imageId, imageStyle);
    this.uploadService.uploadUrl()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
      );
  }

}
