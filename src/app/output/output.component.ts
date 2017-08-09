import {Component, OnInit} from '@angular/core';
import {UploadService} from '../upload.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})


export class OutputComponent implements OnInit {
  urls = new Array;

  constructor(private uploadService: UploadService) {
  }

  ngOnInit() {

  }

  changeListner(event) {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const metadata = {
      contentType: 'image/jpeg'
    };
    firebase.storage().ref().child('images/' + file.name).put(file, metadata);
    firebase.storage().ref()
      .child('images/' + file.name)
      .getDownloadURL().then(url => {
      console.log(url);
      this.urls.push(
        {url: url}
      );
    });
  }

  onSave() {
    console.log(this.urls);
    this.uploadService.uploadUrl(this.urls)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );

  }

}
