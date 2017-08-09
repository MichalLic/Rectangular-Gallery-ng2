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
    let that = this;
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const metadata = {
      contentType: 'image/jpeg'
    };
    const uploadTask = firebase.storage().ref().child('images/' + file.name).put(file, metadata);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      function (snapshot) {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING:
            console.log('Upload is running');
            break;
        }
      }, function (error) {
        // switch (error.code) {
        //   case 'storage/unauthorized':
        //     break;
        //
        //   case 'storage/canceled':
        //     break;
        //
        //   case 'storage/unknown':
        //     break;
        // }
      }, function () {
        const downloadURL = uploadTask.snapshot.downloadURL;
        console.log(downloadURL);
        console.log(that.urls);
        that.uploadService.getUrls()
          .subscribe(
            (data) => {
              for (const item of data) {
                that.urls.push(item);
              }
            }
          );
        that.urls.push(downloadURL);
        console.log(that.urls);
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
