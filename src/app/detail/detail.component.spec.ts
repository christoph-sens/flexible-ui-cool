import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { orderConfig } from '../service/mock/mock';
import { DebugElement, SimpleChange, SimpleChanges } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DetailComponent', () => {
    let component: DetailComponent;
    let fixture: ComponentFixture<DetailComponent>;
    let html: any;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DetailComponent, FormsModule, ReactiveFormsModule],
        })
            .compileComponents();
        fixture = TestBed.createComponent(DetailComponent);
        component = fixture.componentInstance;
        component.config = orderConfig;
        component.ngOnChanges({});
        fixture.detectChanges();
        html = fixture.nativeElement;

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should create the form groups', () => {
        expect(component.form.contains("orderId")).toBeTrue();
    });
    it('should submit the data of the formular', () => {
        let result: any = null;
        component.result.subscribe((obj: any) => result = obj);
        component.onSubmit();
        expect(result?.orderId).toBeNull();

    });
});
