import { Component, input, model } from '@angular/core';
import { ValueAccessorDirective } from '../value-accessor-directive.directive';

@Component({
	selector: 'app-checkbox',
	standalone: true,
	templateUrl: './checkbox.component.html',
	styleUrl: './checkbox.component.css',
	hostDirectives: [ValueAccessorDirective]

})
export class CheckboxComponent {

	label = input('');
	disabled = input('false');
	value = model(false);

	constructor(public valueAccessor: ValueAccessorDirective<boolean>) {
		valueAccessor.value.subscribe((checked: boolean) => this.value.set(checked));
	}

	onChange(): void {
		this.valueAccessor.valueChange(!this.value);
	}
}
