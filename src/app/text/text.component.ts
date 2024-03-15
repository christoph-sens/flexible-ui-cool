import { Component, Input } from '@angular/core';
import { ValueAccessorDirective } from '../value-accessor-directive.directive';

@Component({
	selector: 'app-text',
	standalone: true,
	templateUrl: './text.component.html',
	styleUrl: './text.component.css',
	hostDirectives: [ValueAccessorDirective]
})
export class TextComponent {

	@Input() label!: string;
	@Input() disabled = false;
	@Input() value = "";

	constructor(public valueAccessor:ValueAccessorDirective<string>){
		valueAccessor.value.subscribe((v) => (this.value = v));
	}

	onChange = (value: string) => {
		this.valueAccessor.valueChange(value);
	};
}
