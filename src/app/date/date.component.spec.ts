import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponent } from './date.component';
import { By } from '@angular/platform-browser';

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;
  let html: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
    html = fixture.debugElement.query(By.css("input")).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should show date', () => {
    const date = new Date(Date.now());
    const dateString = date.toISOString().substring(0, 10);
    html.value = dateString;
    html.dispatchEvent(new Event('input'))
    fixture.detectChanges();
    expect(component.value).toBe(dateString);
  });
  it('should show date 2', () => {
    const date = new Date(Date.now());
    const dateString = date.toISOString().substring(0, 10);
    component.value = dateString;
    fixture.detectChanges();
    const actualValue = (html.attributes as any)["ng-reflect-model"].value;
    expect(actualValue).toBe(dateString);
  });
});
