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
export class TableComponent<T extends Object> implements OnInit {

	@Input() values: T[] = [];
	selectedItem!: T;
	@Output() onSelectedItem = new EventEmitter<T>();
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
