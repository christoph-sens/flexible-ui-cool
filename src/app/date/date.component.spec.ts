import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponent } from './date.component';
import { By } from '@angular/platform-browser';
import { ValueAccessorDirective } from '../value-accessor-directive.directive';

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;
  let html: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateComponent],
      providers:[ValueAccessorDirective]
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
    component.value = dateString;
    fixture.detectChanges();
    expect(html.value).toBe(dateString);
  });
});
