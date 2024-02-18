import { Attribute } from "./attribute.model";


export interface Config {
	model: string;
	identifier: string; 
	permissions: string;
	apiEndpoint: string;
	attributes: Attribute[];
}