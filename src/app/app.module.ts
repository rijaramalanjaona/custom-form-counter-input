import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CounterInputComponent } from './counter-input/counter-input.component';


@NgModule({
	declarations: [
		AppComponent,
		CounterInputComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
