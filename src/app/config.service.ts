import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  async getConfigData() {
    const data = await this.http.get('https://jsonplaceholder.typicode.com/todos/1').toPromise();
    // console.log(data);
    this.loadNavItems();
    return data;
  }

  loadNavItems() {
     this.http.get('assets/config.json').subscribe(d => {
      // console.log('config ', d);
    });
  }
}
