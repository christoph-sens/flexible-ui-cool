import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { By } from '@angular/platform-browser';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;
  let element: HTMLInputElement;
  let checkboxInput: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxComponent]
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
    component.label = "hallo";
    fixture.detectChanges();
    expect(element.innerText).toBe(component.label);
  });
  it('should be checked', () => {
    expect(component.checked).toBeFalsy();
    checkboxInput.click();
    fixture.detectChanges();
    expect(component.checked).toBeTruthy();
  });
  it('should be disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const checkbox: HTMLInputElement = fixture.debugElement.query(By.css("input")).nativeElement;
    console.log(checkbox);
    expect(checkbox.getAttribute("ng-reflect-is-disabled")).toBe("true");
  });
});
