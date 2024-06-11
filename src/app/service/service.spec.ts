import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { customerConfig, customers, orderConfig, productConfig } from './mock/mock';
import { Service } from './service';

describe('Service', () => {
	let service: Service;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule]
		});
		httpTestingController = TestBed.inject(HttpTestingController);
		service = TestBed.inject(Service);
	});

	afterEach(() => {
		httpTestingController.verify();
	});


	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return the right mock config', (configName = [productConfig, orderConfig, customerConfig]) => {
		configName.forEach((config) => {
			service.searchMock({}, config).subscribe((x: any[]) => {
				expect(x.length).toBeGreaterThan(0);
			});
		});
	});

	it('should create a search request', () => {
		service.search(customers[0], customerConfig).subscribe((data) => {
			expect(data).toBe(customers);
		});
		const queryParams = Service.prepareQueryParams(customers[0]);
		const req = httpTestingController.expectOne('http://localhost:4200/' + customerConfig.apiEndpoint + "search/?" + queryParams);
		expect(req.request.method).toBe('GET');
		req.flush(customers);
	});

	it('should add an object', () => {
		service.add(customers[0], customerConfig).subscribe();
		const req = httpTestingController.expectOne('http://localhost:4200/' + customerConfig.apiEndpoint);
		expect(req.request.body).toBe(customers[0]);
		expect(req.request.method).toBe('POST');
	});

	it('should be update an existing object', () => {
		service.update(customers[0], customerConfig).subscribe();
		const identifier = customers[0][customerConfig.identifier];
		const req = httpTestingController.expectOne('http://localhost:4200/' + customerConfig.apiEndpoint + identifier);
		expect(req.request.body).toBe(customers[0]);
		expect(req.request.method).toBe('PUT');
	});

	it('should be delete an existing object', () => {
		service.remove(customers[0], customerConfig).subscribe();
		const identifier = customers[0][customerConfig.identifier];
		const req = httpTestingController.expectOne('http://localhost:4200/' + customerConfig.apiEndpoint + identifier);
		expect(req.request.method).toBe('DELETE');
	});

	it('should be computed query params', () => {
		const object = { a: 1, b: 2 };
		const httpParams = Service.prepareQueryParams(object);
		expect(httpParams.get("a")).toBe("1");
		expect(httpParams.get("b")).toBe("2");
	});
});
