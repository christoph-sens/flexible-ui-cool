import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";

@Component({
    selector: 'app-order-search',
    standalone: true,
    templateUrl: './order-search.component.html',
    styleUrl: './order-search.component.css',
    imports: [SearchComponent]
})
export class OrderSearchComponent {

}
