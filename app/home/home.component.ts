import {Component} from '@angular/core';

@Component({
    selector: 'home',
    template: `<marquee class="marfeed" direction=up scrollamount="2">

	<div>Text will Move1</div>
	<div>Text will Move2</div>
	<div>Text will Move3</div>
	<div>Text will Move4</div>
	<div>Text will Move5</div>
	<div>Text will Move6</div>
	<div>Text will Move7</div>

	</marquee><img src="./app/images/mainbodyimage.jpg" width="1365px;" height="400px;"/> `
})

export class HomeComponent {
  title: string = 'Home Page..';
  body:  string = 'This is the about home body';
}