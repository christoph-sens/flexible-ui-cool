import { NgFor } from '@angular/common';
import { Component, input, model } from '@angular/core';
import { ValueAccessorDirective } from '../value-accessor-directive.directive';

@Component({
	selector: 'app-dropdown',
	standalone: true,
	imports: [NgFor],
	templateUrl: './dropdown.component.html',
	styleUrl: './dropdown.component.css',
	hostDirectives: [ValueAccessorDirective]

})
export class DropdownComponent {
	// @Input() label = "";
	// @Input() disabled = false;
	// @Input() options: { value: string; label: string; }[] = [];
	// @Input() value = "";

	label = input('');
	disabled = input(false);
	options = input<{ value: string; label: string } []>([]);
	value = model('');

	constructor(public valueAccessor: ValueAccessorDirective<string>) {
		valueAccessor.value.subscribe((value: string) => this.value.set(value));
	}

	onChange(value: string) {
		this.valueAccessor.valueChange(value);
	}

}
