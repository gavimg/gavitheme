import { Injectable, NgZone } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { KafkasseService } from './services/kafkasse.service';

@Injectable({
  providedIn: 'root'
})
export class SseService {

  private url = 'http://localhost:3005';
  private socket;

  constructor(
    private http: HttpClient,
    private _sseService: KafkasseService,
    private _zone: NgZone
  ) {
    // this.socket = io(this.url);
  }

  // public sendMessage(message) {
  //   const name = localStorage.getItem('name');
  //   // this.socket.emit('MsgToServer', { 'sender': name, 'message': message });
  // }

  // public reciveMessages = () => {
  //   return Observable.create((observer) => {
  //     this.socket.on('send_task', (message) => {
  //       observer.next(message);
  //     });
  //   });
  // }

  getMessages() {
    this.http.get('http://localhost:4000/api/v1/kafka/user/12345').subscribe(data => {
      console.log(data);
    });
  }

  getServerSentEvents() {
    const userId = '123123';
    return Observable.create(observer => {
      const eventSource = this._sseService.getEventSource(`http://localhost:3333/api/v1/notification/user/${userId}`);
      // const source =  new EventSource(`http://localhost:4000/api/v1/kafka/user/${userId}`);
      // console.log('*******************************')
      // source.onmessage = function (event) {
      //   const data = JSON.parse(event.data)
      //   console.log(data);
      //   console.log(JSON.stringify(data))
      // }

      eventSource.onmessage = event => {
        // console.log(typeof event)
        // console.log(event)
        this._zone.run(() => {
          observer.next(event);
        });
      };

      eventSource.onerror = error => {
        this._zone.run(() => {
          observer.error(error);
        });
      };

    });
  }

  // getAllMessages() {
  //   return Observable.create(observer => {
  //     const eventSource = this._sseService.getEventSource(`http://localhost:3333/api/v1/notification/messages`);

  //     eventSource.onmessage = event => {
  //       this._zone.run(() => {
  //         observer.next(event);
  //       });
  //     };

  //     eventSource.onerror = error => {
  //       this._zone.run(() => {
  //         observer.error(error);
  //       });
  //     };

  //   });
  // }

}
