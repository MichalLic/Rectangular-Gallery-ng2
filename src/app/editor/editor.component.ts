import {Component, OnChanges, OnInit} from '@angular/core';
import {UploadService} from '../upload.service';
import {ActivatedRoute, Params, Route} from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  imageId: number;
  imageUrl: string;
  backgroundImgColor;
  borderImgColor;
  borderImgWidth;
  borderImgRadius;
  imgStyle = [];
  imgFrameStyle = [];

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
    this.uploadService.getUrls()
      .subscribe(
        (data) => {
          this.imageUrl = data[this.imageId];
        }
      );
  }

  bgColor(event) {
    console.log(event.target.value);
    this.backgroundImgColor = event.target.value;
  };

  borderColor(event) {
    console.log(event.target.value);
    this.borderImgColor = event.target.value;
  };

  borderWidth(event) {
    console.log(event.target.value);
    this.borderImgWidth = event.target.value;
  }

  borderRadius(event) {
    console.log(event.target.value);
    this.borderImgRadius = event.target.value;
  }

  onSave() {
    this.imgStyle.push(
      {
        borderColor: this.borderImgColor,
        borderWidth: this.borderImgWidth,
        borderRadius: this.borderImgRadius
      },
    );
    this.imgFrameStyle.push({
      bgColor: this.backgroundImgColor
    });
    console.log(this.imgStyle);
    console.log(this.imgFrameStyle);
  }

}
