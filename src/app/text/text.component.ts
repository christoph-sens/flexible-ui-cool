import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-text',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './text.component.html',
	styleUrl: './text.component.css',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TextComponent),
			multi: true
		}
	]
})
export class TextComponent implements ControlValueAccessor {

	@Input() label!: string;
	@Input() disabled = false;
	@Input() value = "";
	
	
	onChange = (value: any) => { };
	
	setDisabledState?(isDisabled: boolean): void {
	}
	registerOnTouched(fn: any): void {
	}
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	writeValue(obj: string): void {
		this.value = obj;
	}


}
