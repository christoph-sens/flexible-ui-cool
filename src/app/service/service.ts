import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { customers, orders } from "./mock/mock";

@Injectable({
    providedIn: 'root',
})
export class Service<T extends Object> {

    search(object: T, className: string): Observable<T[]> {
        if (className.toLowerCase() === "customer") {
            return of(customers as any as T[]);
        } else {
            return of(orders as any as T[]);
        }
    }
    add(object: T): Observable<void> {
        return of();
    }
    remove(object: T): Observable<void> {
        return of();
    }
    update(object: T): Observable<void> {
        return of();
    }
}