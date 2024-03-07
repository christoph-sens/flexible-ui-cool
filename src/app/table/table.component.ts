import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [TableModule, NgFor],
	templateUrl: './table.component.html',
	styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

	@Input() values: any[] = [];
	selectedItem!: any;
	@Output() onSelectedItem = new EventEmitter<any>();
	headlines: string[] = [];

	ngOnInit(): void {
		this.setHeadlines();
	}
	private setHeadlines() {
		if (this.values.length == 0) {
			this.headlines = [];
		}
		else {
			this.headlines = Object.keys(this.values[0]);
		}
	}
	onSelectItem() {
		this.onSelectedItem.emit(this.selectedItem);
	}
}
