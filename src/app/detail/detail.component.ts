import { Component, input, OnChanges, SimpleChanges, output } from '@angular/core';
import { Config } from '../service/model/config.model';
import { TextComponent } from "../text/text.component";
import { DropdownComponent } from "../dropdown/dropdown.component";
import { DateComponent } from "../date/date.component";
import { ButtonComponent } from "../button/button.component";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
	selector: 'app-detail',
	standalone: true,
	templateUrl: './detail.component.html',
	styleUrl: './detail.component.css',
	imports: [TextComponent, DropdownComponent, DateComponent, ButtonComponent,
		FormsModule, ReactiveFormsModule, NgFor, NgIf]
})
export class DetailComponent implements OnChanges {

	config = input<Config>();
	inputObject = input<any>();
	onResult = output<any>();

	detailFilters: DetailFilter[] = [];
	form!: FormGroup;
	filtersPerRow = 4;

	constructor(private formBuilder: FormBuilder) {
		this.form = this.formBuilder.group([]);
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.createDetailFilters();
		this.createFormActionNames();

	}

	private createDetailFilters() {
		this.detailFilters = [];
		const inputObj = this.inputObject();
		this.config()!.attributes.forEach((attr) =>
			this.detailFilters.push({
				name: attr.name,
				type: attr.type,
				value: !inputObj ? '' : inputObj[attr.name] as string,
				readonly: attr.isReadOnly == null ? false : attr.isReadOnly
			}))
	}

	private createFormActionNames() {
		const searchFilterNames = this.config()!.attributes.map((att) => att.name);
		const result: any = {};
		const inputObj = this.inputObject();

		searchFilterNames.forEach((ele) => {
			if(!inputObj){
				result[ele] = new FormControl('');
			} else {
				result[ele] = new FormControl(inputObj[ele]);
			}
		});

		this.form = this.formBuilder.group(result);
	}
	onSubmit() {
		const searchFilterNames = this.config()!.attributes.map((att) => att.name);
		const values = this.form.value;
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
