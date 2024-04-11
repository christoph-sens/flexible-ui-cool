import { Component, input, model } from '@angular/core';
import { ValueAccessorDirective } from '../value-accessor-directive.directive';

@Component({
	selector: 'app-date',
	standalone: true,
	templateUrl: './date.component.html',
	styleUrl: './date.component.css',
	hostDirectives: [ValueAccessorDirective]
})

export class DateComponent {

	label = input('');
	disabled = input(false);
	value = model('');

	constructor(public valueAccessor: ValueAccessorDirective<string>) {
		this.valueAccessor.value.subscribe((date: string) => { this.value.set(date) });
	}

	onChange(date: string) {
		this.valueAccessor.valueChange(date);
	}



}
