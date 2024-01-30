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
export class SearchComponent implements OnInit {

	@Input() configName!: string;

	searchObject!: any;

	tableValues: any[] = [];

	selectedObject!: any;

	config!: Config;

	constructor(private configService: ConfigService, private service: Service) {

	}

	ngOnInit(): void {
		this.configService.getConfig(this.configName).subscribe((config) => this.createDataForGrid(config));
	}

	createDataForGrid(config: Config) {
		this.config = config;

	}
	onSearch(object: any) {
		this.service.search(object, this.configName).subscribe((data: any[]) => this.tableValues = data);
	}


	onItemSelect(object: any) {
		this.selectedObject = object;
	}

	onResult(object: any) {
		console.log(object);
	}


}
