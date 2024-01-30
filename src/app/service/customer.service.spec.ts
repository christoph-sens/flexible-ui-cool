import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CustomerService } from './customer.service';
import { customers } from './mock/mock';
import { Customer } from './model/customer.model';

describe('CustomerService', () => {
	let service: CustomerService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule]
		});
		httpTestingController = TestBed.inject(HttpTestingController);
		service = TestBed.inject(CustomerService);
	});

	afterEach(() => {
		httpTestingController.verify();
	});


	it('should be created', () => {
		expect(service).toBeTruthy();
	});
	it('should deliver a customer response', () => {
		const mockedResponse = customers;
		const searchParameter: Customer = {};
		service.searchCustomer(searchParameter).subscribe(data => {
			expect(data).toEqual(mockedResponse);
		});
		const req = httpTestingController.expectOne('http://www.example.com/search/');
		expect(req.request.method).toBe('GET');
		req.flush(mockedResponse);
	});
	it('query params are corretly computed', () => {
		const httpsParams = CustomerService.prepareQueryParams(customers[0]);
		console.log(customers[0]);
		expect(httpsParams.keys().length).toBe(Object.keys(customers[0]).length);

	});
});
