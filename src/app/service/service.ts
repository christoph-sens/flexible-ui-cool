import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { customers, orders } from "./mock/mock";

@Injectable({
    providedIn: 'root',
})
export class Service {

    search(object: any, className: string): Observable<any> {
        if (className.toLowerCase() === "customer") {
            return of(customers as any);
        } else {
            return of(orders as any);
        }
    }
    add(object: any): Observable<void> {
        return of();
    }
    remove(object: any): Observable<void> {
        return of();
    }
    update(object: any): Observable<void> {
        return of();
    }
}