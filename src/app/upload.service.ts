import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UploadService {
  constructor(private http: Http) {
  }

  uploadUrl(urls: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://rectangulargallery.firebaseio.com/data.json', urls, {headers: headers});
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
