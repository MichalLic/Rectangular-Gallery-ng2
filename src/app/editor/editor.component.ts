import {Component, OnInit} from '@angular/core';
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
          this.imageUrl = data[this.imageId].url;
        }
      );
  }

}
