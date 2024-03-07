import { Observable, of } from "rxjs";
import { Config } from "./model/config.model";
import { customerConfig, orderConfig, productConfig } from "./mock/mock";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root',
})
export class ConfigService {

	getConfig(configName: string): Observable<Config> {
		// TODO: flexibel gestalten
		if (configName.toLowerCase() === 'customer') {
			return of(customerConfig);
		} else if (configName.toLowerCase() === 'product') {
			return of(productConfig);
		} else {
			return of(orderConfig);
		}
	}
}