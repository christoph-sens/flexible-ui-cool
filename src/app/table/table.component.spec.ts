import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { Customer } from '../service/model/customer.model';
import { customers } from '../service/mock/mock';
import { By } from '@angular/platform-browser';

describe('TableComponent', () => {
	let component: TableComponent<Customer>;
	let fixture: ComponentFixture<TableComponent<Customer>>;

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
		component.values = customers;
		fixture.detectChanges();
		const list = fixture.debugElement.queryAll(By.css('.p-selectable-row'));
		const firstElement = list[0];
		(firstElement.nativeElement as HTMLElement).click();
		fixture.detectChanges();
		expect(component.selectedItem).toBe(customers[0]);

	})
});
