import { Injectable } from '@angular/core';
import { Customer } from '../service/model/customer.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { customers } from './mock/mock';


@Injectable({
	providedIn: 'root',
})
export class CustomerService {

	constructor(private httpClient: HttpClient) { }

	searchCustomer(customer: Customer): Observable<Customer[]> {
		const queryParams = CustomerService.prepareQueryParams(customer);
		const url = 'http://www.example.com/search/';
		const options = { params: queryParams };
		return this.httpClient.get<Customer[]>(url, options);
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

	searchCostumerMock(customer: Customer): Observable<Customer[]> {
		return of(customers);
	}

}

