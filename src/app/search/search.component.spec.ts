import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    imports: [SearchComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
            .compileComponents();

        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput("configName", "customer");
        component.ngOnInit();
        fixture.detectChanges();
        const searchButton: HTMLButtonElement = fixture.debugElement.query(By.css("button")).nativeElement;
        searchButton.click();
        searchButton.dispatchEvent(new Event("click"));
        fixture.detectChanges();
        const tableDe = fixture.debugElement.queryAll(By.css("tr"));
        const tableElement: HTMLTableColElement = tableDe[2].nativeElement;

        tableElement.click();
        tableElement.dispatchEvent(new Event("click"));
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be an object selected in the data table', () => {
        expect(component.selectedObject).not.toBeUndefined();
    });

    it('should contain data in the data table', () => {
        expect(component.tableValues.length).toBeGreaterThan(0);
    });

    it('should contain 4 buttons', () => {
        const buttonsDe = fixture.debugElement.queryAll(By.css("button"));
        expect(buttonsDe.length).toBe(4);
    });

    it('should be able to add an element', () => {
        const buttonsDe = fixture.debugElement.queryAll(By.css("button"));
        spyOn(component, "onCreate");
        const addButton: HTMLButtonElement = buttonsDe[1].nativeElement;
        addButton.click();
        addButton.dispatchEvent(new Event("click"));
        fixture.detectChanges();
        expect(component.onCreate).toHaveBeenCalled();
    });

    it('should be able to update an element', () => {
        const buttonsDe = fixture.debugElement.queryAll(By.css("button"));
        spyOn(component, "onUpdate");
        const updateButton: HTMLButtonElement = buttonsDe[2].nativeElement;
        updateButton.click();
        updateButton.dispatchEvent(new Event("click"));
        fixture.detectChanges();
        expect(component.onUpdate).toHaveBeenCalled();
    });

    it('should be able to delete an element', () => {
        const buttonsDe = fixture.debugElement.queryAll(By.css("button"));
        spyOn(component, "onDelete");
        const deleteButton: HTMLButtonElement = buttonsDe[3].nativeElement;
        deleteButton.click();
        deleteButton.dispatchEvent(new Event("click"));
        fixture.detectChanges();
        expect(component.onDelete).toHaveBeenCalled();
    });
});
