import { Config } from "../model/config.model";

export const customerConfig: Config =
{
	"model": "customer",
	"apiEndpoint": "api/customers/",
	"permissions": "CRUD",
	"identifier": "customerId",
	"attributes": [
		{
			"name": "customerId",
			"type": "String"
		},
		{
			"name": "firstName",
			"type": "String"
		},
		{
			"name": "lastName",
			"type": "String"
		},
		{
			"name": "street",
			"type": "String"
		},
		{
			"name": "plz",
			"type": "number"
		},
		{
			"name": "city",
			"type": "String"
		},
		{
			"name": "phone",
			"type": "number"
		},
		{
			"name": "status",
			"type": "enum"
		},
		{
			"name": "mail",
			"type": "String"
		},
		{
			"name": "birthday",
			"type": "date",
			"isReadOnly": true
		}
	]
};

export const customers: any[] = [
	{
		customerId: "cId1",
		firstName: "Max",
		lastName: "Meyer",
		street: "Berliner Str. 15",
		phone: 123,
		status: "UNKNOWN",
		city: "Paderborn",
		plz: 32100,
		birthday: new Date(Date.now()).toISOString().substring(0, 10),
		mail: "max.meyer@meyer.de"
	},
	{
		customerId: "cId2",
		firstName: "Maxi",
		lastName: "Meyer",
		street: "Hamburger Str. 15",
		phone: 123,
		status: "UNKNOWN",
		city: "Paderborn",
		plz: 32100,
		birthday: new Date(Date.now()).toISOString().substring(0, 10),
		mail: "maxi.meyer@meyer.de"
	}
];

export const orders: any[] = [
	{
		orderId: '1',
		customerId: 'cId1'
	},
	{
		orderId: '2',
		customerId: 'cId1'
	},
];

export const orderConfig: Config =
{
	"model": "order",
	"permissions": "CRUD",
	"apiEndpoint": "api/orders/",
	"identifier": "orderId",
	"attributes": [
		{
			"name": "customerId",
			"type": "String",
			"isReadOnly": true
		},
		{
			"name": "orderId",
			"type": "String"
		}
	]
};

export const products : any[] = [
	{
		productId: 1,
		name: "mascara",
		price: 5000,
		ingredientes: "A B C D"
	},
	{
		productId: 2,
		name: "foundation",
		price: 15000,
		ingredientes: "A B C D"
	}
];

export const productConfig: Config =
{
	"model": "product",
	"permissions": "CRUD",
	"apiEndpoint": "api/prudocts/",
	"identifier": "productId",
	"attributes": [
		{
			"name": "productId",
			"type": "String",
			"isReadOnly": true
		},
		{
			"name": "name",
			"type": "String"
		},
		{
			"name": "price",
			"type": "String"
		},
		{
			"name": "ingredientes",
			"type": "String"
		},
	]
};
