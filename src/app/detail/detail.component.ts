import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
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
export class DetailComponent<T extends Object> implements OnChanges {
	@Input() config!: Config;
	@Input() inputObject!: T;
	@Output() result = new EventEmitter<T>();
	detailFilters: DetailFilter[] = [];
	form!: FormGroup;

	constructor(private formBuilder: FormBuilder) { }
	ngOnChanges(changes: SimpleChanges): void {
		this.detailFilters = [];
		this.form = this.formBuilder.group([]);
		this.createDetailFilters();
		this.createFormActionNames();
	}

	private createDetailFilters() {
		this.config.attributes.forEach((attr) =>
			this.detailFilters.push({
				name: attr.name,
				type: attr.type,
				value: (this.inputObject as any)[attr.name] as string,
				readonly: attr.isReadOnly == null ? false : attr.isReadOnly
			}))
	}

	private createFormActionNames() {
		const searchFilterNames = this.config.attributes.map((att) => att.name);
		let result: any = {};
		searchFilterNames.forEach((ele) => result[ele] = new FormControl((this.inputObject as any)[ele]));
		console.log(result);
		this.form = this.formBuilder.group(result);
	}
	onSubmit() {
		const searchFilterNames = this.config.attributes.map((att) => att.name);
		const values = this.form.value;
		const inputObject: any = {};
		searchFilterNames.forEach((ele) => inputObject[ele] = values[ele]);
		this.result.emit(inputObject as T);
	}
}

export interface DetailFilter {
	name: string;
	type: string;
	value: string;
	readonly: boolean;
}
