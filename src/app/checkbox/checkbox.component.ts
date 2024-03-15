import { Component, Input } from '@angular/core';
import { ValueAccessorDirective } from '../value-accessor-directive.directive';

@Component({
	selector: 'app-checkbox',
	standalone: true,
	templateUrl: './checkbox.component.html',
	styleUrl: './checkbox.component.css',
	hostDirectives: [ValueAccessorDirective]

})
export class CheckboxComponent {

	@Input() label!: string;
	@Input() disabled = false;
	@Input() value = false;

	constructor(public valueAccessor: ValueAccessorDirective<boolean>) {
		valueAccessor.value.subscribe((checked: boolean) => this.value = checked);
	}

	onChange(): void {
		this.valueAccessor.valueChange(!this.value);
		console.error(this.value);
	}
}
