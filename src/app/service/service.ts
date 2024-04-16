import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { customers, orders, products } from "./mock/mock";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Config } from "./model/config.model";

@Injectable({
    providedIn: 'root',
})
export class Service {

    static baseUrl = "http://localhost:4200/";

    constructor(private httpClient: HttpClient) { }

    searchMock(object: any, configName: string): Observable<any[]> {
        if (configName.toLowerCase() === "customer") {
            return of(customers);
        } else if (configName.toLowerCase() === "product") {
            return of(products);
        } else {
            return of(orders);
        }
    }

    search(object: any, config: Config): Observable<any[]> {
        const queryParams = Service.prepareQueryParams(object);
        const options = { params: queryParams };
        return this.httpClient.get<any[]>(Service.baseUrl + config.apiEndpoint + 'search/', options);
    }

    add(object: any, config: Config): Observable<object> {
        return this.httpClient.post(Service.baseUrl + config.apiEndpoint, object);
    }

    remove(object: any, config: Config): Observable<object> {
        const identifier = object[config.identifier];
        const url = Service.baseUrl + config.apiEndpoint + identifier;
        return this.httpClient.delete(url);
    }

    update(object: any, config: Config): Observable<object> {
        const identifier = object[config.identifier];
        const url = Service.baseUrl + config.apiEndpoint + identifier;
        return this.httpClient.put(url, object);
    }

    static prepareQueryParams(obj: any): HttpParams {

        let queryParams = new HttpParams();
        Object.keys(obj).forEach((key: string) => {
            const current: any = obj[key];
            if (current !== undefined) {
                queryParams = queryParams.append(key, current);
            }
        });
        return queryParams;
    }
}