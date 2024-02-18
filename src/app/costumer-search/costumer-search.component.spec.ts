import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerSearchComponent } from './costumer-search.component';

describe('CostumerSearchComponent', () => {
  let component: CostumerSearchComponent;
  let fixture: ComponentFixture<CostumerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostumerSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostumerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
