import { Component, OnInit } from '@angular/core';
import { SseService } from './sse.service';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  messages = [];

  constructor(private service: SseService, private config: ConfigService) {}

  ngOnInit() {

    this.config.getConfigData();
    this.service.getServerSentEvents()
    .subscribe(event => {
      console.log(JSON.parse(event.data));
    });

  }
}
