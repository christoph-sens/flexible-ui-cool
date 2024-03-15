import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { Config } from '../service/model/config.model';
import { TableComponent } from "../table/table.component";
import { DetailComponent } from "../detail/detail.component";
import { ButtonComponent } from '../button/button.component';
import { NgIf } from '@angular/common';
import { Service } from '../service/service';

@Component({
	selector: 'app-search',
	standalone: true,
	templateUrl: './search.component.html',
	styleUrl: './search.component.css',
	imports: [NgIf, TableComponent, DetailComponent, ButtonComponent]
})
export class SearchComponent implements OnInit {

	@Input() configName!: string;
	@ViewChildren(DetailComponent)
	components!: QueryList<DetailComponent>;

	searchObject!: any;

	tableValues: any[] = [];

	selectedObject!: any;
	objectToSubmit!: any;

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
		this.service.searchMock(object, this.configName).subscribe((data: any[]) => this.tableValues = data);
	}

	onSearchClick() {
		this.components.first.onSubmit();
	}

	onItemSelect(object: any) {
		this.selectedObject = object;
	}

	onResult(object: any) {
		this.objectToSubmit = object;
	}

	onUpdate() {
		this.components.last.onSubmit();
		this.service.update(this.objectToSubmit, this.config).subscribe();
	}

	onDelete() {
		this.components.last.onSubmit();
		this.service.remove(this.objectToSubmit, this.config).subscribe();
	}

	onCreate() {
		this.components.last.onSubmit();
		this.service.add(this.objectToSubmit, this.config).subscribe();
	}

	canRead(): boolean {
		return this.config.permissions.toUpperCase().includes('R');
	}
	canAdd(): boolean {
		return this.config.permissions.toUpperCase().includes('C');
	}
	canRemove(): boolean {
		return this.config.permissions.toUpperCase().includes('D');
	}
	canUpdate(): boolean {
		return this.config.permissions.toUpperCase().includes('U');
	}
}
