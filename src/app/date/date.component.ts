import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-date',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './date.component.html',
	styleUrl: './date.component.css',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => DateComponent),
			multi: true
		}
	]

})
export class DateComponent implements ControlValueAccessor {

	@Input() label = "";
	@Input() disabled = false;
	@Input() value = "";
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
		this.value = obj;
	}
}
