import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KafkasseService {

  constructor() { }

  getEventSource(url: string): EventSource {
    return new EventSource(url);
  }



}
