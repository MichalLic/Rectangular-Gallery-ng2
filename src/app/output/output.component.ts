import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})


export class OutputComponent implements OnInit {
  fileName: string;
  showImage = false;
  url: string;
  firebaseConfig = {
    apiKey: 'AIzaSyCQBlpqtOGwn4ujwTTj90NYZ4e-wNnz5w4',
    authDomain: 'rectangulargallery.firebaseapp.com',
    databaseURL: 'https://rectangulargallery.firebaseio.com',
    projectId: 'rectangulargallery',
    storageBucket: 'rectangulargallery.appspot.com',
    messagingSenderId: '570084892486'
  };


  constructor() {
  }


  ngOnInit() {
    firebase.initializeApp(this.firebaseConfig);
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
      this.url = url;
    });
    this.showImage = true;
  }

}
