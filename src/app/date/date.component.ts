import { Component, Input } from '@angular/core';
import { ValueAccessorDirective } from '../value-accessor-directive.directive';

@Component({
	selector: 'app-date',
	standalone: true,
	templateUrl: './date.component.html',
	styleUrl: './date.component.css',
	hostDirectives: [ValueAccessorDirective]
})

export class DateComponent {

	@Input() label = "";
	@Input() disabled = false;
	@Input() value = "";

	constructor(public valueAccessor: ValueAccessorDirective<string>) {
		this.valueAccessor.value.subscribe((date: string) => { console.log("Set value " + date); this.value = date; });
	}

	onChange(date: string) {
		this.valueAccessor.valueChange(date);
	}



}
