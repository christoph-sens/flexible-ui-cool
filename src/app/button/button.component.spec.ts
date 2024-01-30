import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
	let component: ButtonComponent;
	let fixture: ComponentFixture<ButtonComponent>;
	let element: HTMLButtonElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ButtonComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ButtonComponent);
		component = fixture.componentInstance;
		element = fixture.nativeElement.querySelector("button");
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it('is disabled or enabled', (disabled = [true, false]) => {
		disabled.forEach((dis) => {
			component.disabled = dis;
			fixture.detectChanges();
			expect(element.disabled).toBe(component.disabled)
		})
	});
	it('should have a label', () => {
		component.label = "hallo";
		fixture.detectChanges();
		expect(element.innerText).toBe(component.label);
	})

});
