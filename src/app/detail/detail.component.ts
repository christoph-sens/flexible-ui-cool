import { Component, input, output, computed, Signal, inject } from '@angular/core';
import { Config } from '../service/model/config.model';
import { TextComponent } from "../text/text.component";
import { DropdownComponent } from "../dropdown/dropdown.component";
import { DateComponent } from "../date/date.component";
import { ButtonComponent } from "../button/button.component";
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
	selector: 'app-detail',
	standalone: true,
	templateUrl: './detail.component.html',
	styleUrl: './detail.component.css',
	imports: [TextComponent, DropdownComponent, DateComponent, ButtonComponent,
		ReactiveFormsModule, NgFor, NgIf]
})
export class DetailComponent {

	config = input<Config>();
	inputObject = input<any>();
	onResult = output<any>();

	detailFilters: Signal<DetailFilter[]> = computed(() => {
		const config = this.config();
		const filters: DetailFilter[] = [];
		const inputObj = this.inputObject();
		config?.attributes.forEach((attr) =>
			filters.push({
				name: attr.name,
				type: attr.type,
				value: !inputObj ? '' : inputObj[attr.name] as string,
				readonly: attr.isReadOnly == null ? false : attr.isReadOnly
			}));
		return filters;
	});

	formBuilder = inject(FormBuilder);
	form = computed(() => {
		const config = this.config();
		return this.createFormActionNames(config);
	});
	
	private createFormActionNames(config: Config | undefined) {
		const searchFilterNames = config?.attributes.map((att) => att.name);
		const result: any = {};
		const inputObj = this.inputObject();

		searchFilterNames?.forEach((ele) => {
			if (!inputObj) {
				result[ele] = new FormControl('');
			} else {
				result[ele] = new FormControl(inputObj[ele]);
			}
		});

		return this.formBuilder.group(result);
	}
	onSubmit() {
		const searchFilterNames = this.config()!.attributes.map((att) => att.name);
		const values = this.form().value;
		const result: any = {};
		searchFilterNames.forEach((ele) => result[ele] = values[ele]);
		this.onResult.emit(result);
	}
}

export interface DetailFilter {
	name: string;
	type: string;
	value: string;
	readonly: boolean;
}
