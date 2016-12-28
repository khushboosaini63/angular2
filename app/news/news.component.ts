import {Component} from '@angular/core';

@Component({
    selector: 'news',
    template: '<h1>Hi ! news</h1>'
})

export class NewsComponent {
  title: string = 'News Page..';
  body:  string = 'This is the about News body';
}