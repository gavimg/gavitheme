import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ConfigService } from './config.service';
import { MyLibModule } from 'projects/my-lib/src/public_api';

import { config } from '../config';


export function configProviderFactory(provider: ConfigService) {
  return async () => {
    config.userData = await provider.getConfigData();
  };
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MyLibModule.forRoot(config),
  ],
  providers: [
    ConfigService,
    { provide: APP_INITIALIZER, useFactory: configProviderFactory, deps: [ConfigService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
