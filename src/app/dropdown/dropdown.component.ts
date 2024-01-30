import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-dropdown',
	standalone: true,
	imports: [NgFor, FormsModule],
	templateUrl: './dropdown.component.html',
	styleUrl: './dropdown.component.css',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => DropdownComponent),
			multi: true
		}
	]
})
export class DropdownComponent implements ControlValueAccessor {
	@Input() label = "";
	@Input() disabled = false;
	@Input() options: { value: string; label: string; }[] = [];
	@Input() value = "";
	selectedOption: string = '';

	onChange = (value: string) => { };

	setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}
	registerOnTouched(fn: any): void {

	}
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	writeValue(obj: string): void {
		this.value = obj
	}





}
