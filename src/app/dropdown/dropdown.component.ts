import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
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
	@Input() label = "";
	@Input() disabled = false;
	@Input() options: { value: string; label: string; }[] = [];
	@Input() value = "";

	constructor(public valueAccessor: ValueAccessorDirective<string>) {
		valueAccessor.value.subscribe((value: string) => this.value = value);
	}

	onChange(value: string) {
		this.valueAccessor.valueChange(value);
	}

}
