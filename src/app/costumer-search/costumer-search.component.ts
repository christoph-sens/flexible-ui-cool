import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";

@Component({
    selector: 'app-costumer-search',
    standalone: true,
    templateUrl: './costumer-search.component.html',
    styleUrl: './costumer-search.component.css',
    imports: [SearchComponent]
})
export class CostumerSearchComponent {

}
