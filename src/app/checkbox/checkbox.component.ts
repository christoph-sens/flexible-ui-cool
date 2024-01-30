import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-checkbox',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './checkbox.component.html',
	styleUrl: './checkbox.component.css',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CheckboxComponent),
			multi: true
		}
	]
})
export class CheckboxComponent implements ControlValueAccessor {

	@Input() label!: string;
	@Input() disabled = false;
  	@Input() value = "";
  	checked: boolean = false;
	name: string = '';
	
	onChangeHandler = (value: boolean) => { };

	onChange(): void {
		this.checked = !this.checked;
		this.onChangeHandler(this.checked);
	}

	setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;		
	}
	registerOnTouched(fn: any): void {
	
	}
	registerOnChange(fn: any): void {
		this.onChangeHandler = fn;
	}
	writeValue(obj: boolean): void {
		this.checked = obj;
	}
}
