import { Config } from "../model/config.model";

export const customerConfig: Config =
{
	"model": "customer",
	"permissions": "CRUD",
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
		street: "Penner Str. 15",
		phone: 123,
		status: "UNKNOWN",
		city: "Paderbr00klyn",
		plz: 32100,
		birthday: new Date(Date.now()).toISOString().substring(0, 10),
		mail: "penner-disko.de"
	},
	{
		customerId: "cId2",
		firstName: "Max",
		lastName: "Meyer",
		street: "Penner Str. 15",
		phone: 123,
		status: "UNKNOWN",
		city: "Paderbr00klyn",
		plz: 32100,
		birthday: new Date(Date.now()).toISOString().substring(0, 10),
		mail: "penner-disko.de"
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
	"model": "rorder",
	"permissions": "CRUD",
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