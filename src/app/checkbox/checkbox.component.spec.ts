import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { By } from '@angular/platform-browser';
import { ValueAccessorDirective } from '../value-accessor-directive.directive';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;
  let element: HTMLInputElement;
  let checkboxInput: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxComponent, ValueAccessorDirective],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    checkboxInput = fixture.debugElement.query(By.css("input")).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have label', () => {
    fixture.componentRef.setInput("label", "hallo");
    fixture.detectChanges();
    expect(element.innerText).toBe(component.label());
  });
  it('should be checked', () => {
    fixture.componentRef.setInput("value", true);
    fixture.detectChanges();
    expect(checkboxInput.checked).toBeTrue();

  });
  it('should be disabled', () => {
    fixture.componentRef.setInput("disabled", true);
    fixture.detectChanges();
    const checkbox: HTMLInputElement = fixture.debugElement.query(By.css("input")).nativeElement;
    expect(checkbox.disabled).toBe(true);
  });
});
