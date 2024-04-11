 import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { customers } from '../service/mock/mock';
import { By } from '@angular/platform-browser';

describe('TableComponent', () => {
	let component: TableComponent;
	let fixture: ComponentFixture<TableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TableComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(TableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should show elements and an element should be selected', () => {
		fixture.componentRef.setInput("values", customers);
		fixture.detectChanges();
		const list = fixture.debugElement.queryAll(By.css('.p-selectable-row'));
		const firstElement = list[0];
		(firstElement.nativeElement as HTMLElement).click();
		fixture.detectChanges();
		console.log(component.headlines);
		expect(component.selectedItem).toBe(customers[0]);

	});
	it('should display an empty table', () => {
		fixture.detectChanges();
		const list = fixture.debugElement.queryAll(By.css('.p-selectable-row'));
		expect(list.length).toBe(0);
	})
});