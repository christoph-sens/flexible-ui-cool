import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { Customer } from './service/model/customer.model';
import { Order } from './service/model/order.model';

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	imports: [CommonModule, RouterOutlet, SearchComponent]
})
export class AppComponent {
	customer = new Customer();
	order = new Order();
}
