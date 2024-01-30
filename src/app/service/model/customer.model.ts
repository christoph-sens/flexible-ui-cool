export class Customer {
	customerId: string;
	firstName: string;
	lastName: string;
	street: string;
	plz: number | undefined;
	city: string;
	phone: number | undefined;
	status: Status;
	mail: string;
	birthday: string;

	constructor() {
		this.customerId = '';
		this.firstName = '';
		this.lastName = '';
		this.street = '';
		this.plz = undefined;
		this.city = '';
		this.phone = undefined;
		this.status = Status.UNKNOWN;
		this.mail = '';
		this.birthday = '';
	}

}

export enum Status {
	UNKNOWN,
	ACTIVE = 1,
	INACTIVE = 0
}