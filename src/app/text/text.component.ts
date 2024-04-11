import { Component, input, model } from '@angular/core';
import { ValueAccessorDirective } from '../value-accessor-directive.directive';

@Component({
	selector: 'app-text',
	standalone: true,
	templateUrl: './text.component.html',
	styleUrl: './text.component.css',
	hostDirectives: [ValueAccessorDirective]
})
export class TextComponent {

	label = input('');
	disabled = input(false);
	value = model('');

	constructor(public valueAccessor: ValueAccessorDirective<string>) {
		valueAccessor.value.subscribe((v) => (this.value.set(v)));
	}

	onChange = (value: string) => {
		this.valueAccessor.valueChange(value);
	};
}
