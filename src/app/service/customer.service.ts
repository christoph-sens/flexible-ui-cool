import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { customers } from './mock/mock';


@Injectable({
	providedIn: 'root',
})
export class CustomerService {

	constructor(private httpClient: HttpClient) { }

	searchCustomer(customer: any): Observable<any[]> {
		const queryParams = CustomerService.prepareQueryParams(customer);
		const url = 'http://www.example.com/search/';
		const options = { params: queryParams };
		return this.httpClient.get<any[]>(url, options);
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

	searchCostumerMock(): Observable<any[]> {
		return of(customers);
	}

}

