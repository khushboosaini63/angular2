import {Component} from '@angular/core';

@Component({
    selector: 'about',
    template: '<h1>Hi ! about</h1>'
})

export class AboutComponent {
  title: string = 'About Page..';
  body:  string = 'This is the about body';
}