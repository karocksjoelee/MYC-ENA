import { Component, OnInit, OnDestroy } from '@angular/core';
import { RealTimeService } from './realtime.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  messages = [];
  connection;
  message;

  constructor(private realTimeService: RealTimeService, public translate: TranslateService) {

    translate.setDefaultLang('zhtw');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|zhtw/) ? browserLang : 'zhtw');

   }

  ngOnInit() {

    this.connection = this.realTimeService.getMessages().subscribe((message) => {
      this.messages.push(message);
    });

  }

  sendMessage() {

    this.realTimeService.sendMessage(this.message);
    this.message = '';

  }

  onChangeLang(event) {

    this.translate.use(event.target.value);

  }

  ngOnDestroy() {

    this.connection.unsubscribe();

  }
}
