import { Component, input, OnInit, viewChildren} from '@angular/core';
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

	configName = input('');
	components = viewChildren(DetailComponent);

	searchObject!: any;

	tableValues: any[] = [];

	selectedObject!: any;
	objectToSubmit!: any;

	config!: Config;

	constructor(private configService: ConfigService, private service: Service) {

	}

	ngOnInit(): void {
		this.configService.getConfig(this.configName()).subscribe((config) => this.config = config);
	}

	onSearch(object: any) {
		this.service.searchMock(object, this.configName()).subscribe((data: any[]) => this.tableValues = data);
	}

	onSearchClick() {
		this.components().at(0)?.onSubmit();
	}

	onItemSelect(object: any) {
		this.selectedObject = object;
	}

	onResult(object: any) {
		this.objectToSubmit = object;
	}

	onUpdate() {
		this.components().at(1)?.onSubmit();
		this.service.update(this.objectToSubmit, this.config).subscribe();
	}

	onDelete() {
		this.components().at(1)?.onSubmit();
		this.service.remove(this.objectToSubmit, this.config).subscribe();
	}

	onCreate() {
		this.components().at(1)?.onSubmit();
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
