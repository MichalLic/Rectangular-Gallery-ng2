import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UploadService {
  private imagesData = [];

  constructor(private http: Http) {
  }

  addImgData(imageData) {
    this.imagesData.push(imageData);
  }

  getImagesData() {
    return this.imagesData.slice();
  }

  getSingleImageData(id) {
    return this.imagesData[id];
  }

  updateImageData(index, newData) {
    this.imagesData[index] = newData;
  }

  uploadUrl() {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://rectangulargallery.firebaseio.com/data.json', this.getImagesData(), {headers: headers});
  }

  getUrls() {
    return this.http.get('https://rectangulargallery.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
