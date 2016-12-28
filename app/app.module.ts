import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule,JsonpModule} from '@angular/http';
import {Router} from '@angular/router';
import { routing }   from './app.routes';
import { HelloWorldComponent }   from './hello-world.component';
import { HomeComponent }   from './home/home.component';
import { NewsComponent }   from './news/news.component';
import { ContactComponent }   from './contact/contact.component';
import { AboutComponent }   from './about/about.component';


@NgModule({
  imports:      [ BrowserModule,FormsModule,routing,HttpModule,JsonpModule  ],
  declarations: [ HelloWorldComponent,HomeComponent,NewsComponent,ContactComponent,AboutComponent ],
  bootstrap:    [ HelloWorldComponent]
})
export class AppModule { }