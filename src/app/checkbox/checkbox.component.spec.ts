import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;
  let element: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have label', () => {
    component.label= "hallo";
    fixture.detectChanges();
    expect(element.innerText).toBe(component.label);
  });
});
