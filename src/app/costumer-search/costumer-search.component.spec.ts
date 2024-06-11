import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerSearchComponent } from './costumer-search.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('CostumerSearchComponent', () => {
  let component: CostumerSearchComponent;
  let fixture: ComponentFixture<CostumerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CostumerSearchComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
