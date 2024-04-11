import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { orderConfig } from '../service/mock/mock';

describe('DetailComponent', () => {
    let component: DetailComponent;
    let fixture: ComponentFixture<DetailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DetailComponent, FormsModule, ReactiveFormsModule],
        })
            .compileComponents();
        fixture = TestBed.createComponent(DetailComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput("config", orderConfig);
        component.ngOnChanges({});
        fixture.detectChanges();

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should create the form groups', () => {
        expect(component.form.contains("orderId")).toBeTrue();
    });
    it('should submit the data of the formular', () => {
        let result: any = null;
        component.onResult.subscribe((obj: any) => result = obj);
        component.onSubmit();
        expect(result?.orderId).toBeFalsy();

    });
});
