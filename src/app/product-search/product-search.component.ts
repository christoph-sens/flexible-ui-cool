import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";

@Component({
    selector: 'app-product-search',
    standalone: true,
    templateUrl: './product-search.component.html',
    styleUrl: './product-search.component.css',
    imports: [SearchComponent]
})
export class ProductSearchComponent {

}
