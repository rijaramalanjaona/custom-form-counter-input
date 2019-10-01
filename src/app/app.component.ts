import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {createCounterRangeValidator} from './validator/counter-input';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	form: FormGroup;
	maxValue = 15;
	minValue = 1;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			counter: [6, createCounterRangeValidator(this.maxValue, this.minValue)]
		});
	}

	onSubmit() {
		console.log(this.form.value);
	}
}
