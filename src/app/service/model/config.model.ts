import { Attribute } from "./attribute.model";


export interface Config {
	model: string;
	permissions: string;
	attributes: Attribute[];
}