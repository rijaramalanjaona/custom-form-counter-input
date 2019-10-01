import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
	selector: 'app-counter-input',
	templateUrl: './counter-input.component.html',
	styleUrls: ['./counter-input.component.css'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CounterInputComponent),
			multi: true
		}
	]
})
export class CounterInputComponent implements ControlValueAccessor {

	@Input()
	_counterValue = 0;

	constructor() { }

	get counterValue() {
		return this._counterValue;
	}

	set counterValue(value) {
		this._counterValue = value;
		this.propagateChange(this._counterValue);
	}

	increment() {
		this.counterValue++;
	}

	decrement() {
		this.counterValue--;
	}

	/**
	 * call propagateChange() with the value whenever counterValue changes through the view.
	 * In other words, if either the increment() or decrement() button is clicked, we want to propagate the new value to the outside world.
	 */
	propagateChange = (_: any) => {};

	registerOnChange(fn: any): void {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: any): void {
	}

	/**
	 * it takes a new value from the form model and writes it into the view
	 * updating the counterValue property, as it’s interpolated automatically
	 */
	writeValue(value: any): void {
		if (value !== undefined) {
			this.counterValue = value;
		}
	}
}
