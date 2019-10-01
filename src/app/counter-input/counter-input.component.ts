import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-counter-input',
	templateUrl: './counter-input.component.html',
	styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {

	@Input()
	counterValue = 0;

	constructor() { }

	ngOnInit() {
	}

	increment() {
		this.counterValue++;
	}

	decrement() {
		this.counterValue--;
	}
}
