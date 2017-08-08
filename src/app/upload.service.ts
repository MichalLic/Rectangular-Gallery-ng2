import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class UploadService {
  constructor(private http: Http) {
  }

  uploadUrl(urls: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://rectangulargallery.firebaseio.com/data.json', urls, {headers: headers});
  }
}
