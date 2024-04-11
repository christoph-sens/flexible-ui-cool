import { NgFor } from '@angular/common';
import { Component, model, OnInit, output } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [TableModule, NgFor],
	templateUrl: './table.component.html',
	styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

	values = model<any[]>([]);
	onSelectedItem = output<any>()

	headlines: string[] = [];
	selectedItem!: any;

	ngOnInit(): void {
		this.setHeadlines();
	}
	private setHeadlines() {
		if (this.values().length == 0) {
			this.headlines = [];
		}
		else {
			this.headlines = Object.keys(this.values()[0]);
		}
	}
	onSelectItem() {
		this.onSelectedItem.emit(this.selectedItem);
	}
}
