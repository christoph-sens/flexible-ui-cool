import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { Config } from '../service/model/config.model';
import { TableComponent } from "../table/table.component";
import { DetailComponent } from "../detail/detail.component";
import { NgIf } from '@angular/common';
import { Service } from '../service/service';

@Component({
	selector: 'app-search',
	standalone: true,
	templateUrl: './search.component.html',
	styleUrl: './search.component.css',
	imports: [NgIf, TableComponent, DetailComponent]
})
export class SearchComponent<T extends Object> implements OnInit {

	@Input() searchObject!: T;

	tableValues: T[] = [];

	selectedObject!: T;

	config!: Config;

	constructor(private configService: ConfigService, private service: Service<T>) {

	}

	ngOnInit(): void {
		this.configService.getConfig(this.searchObject.constructor.name).subscribe((config) => this.createDataForGrid(config));
	}

	createDataForGrid(config: Config) {
		this.config = config;

	}
	onSearch(object: T) {
		this.service.search(object, this.searchObject.constructor.name).subscribe((data: T[]) => this.tableValues = data);
	}


	onItemSelect(object: T) {
		this.selectedObject = object;
	}

	onResult(object: T) {
		console.log(object);
	}


}
