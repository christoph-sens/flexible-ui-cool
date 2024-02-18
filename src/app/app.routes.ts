import { Routes } from '@angular/router';
import { OrderSearchComponent } from './order-search/order-search.component';
import { CostumerSearchComponent } from './costumer-search/costumer-search.component';

export const routes: Routes = [
    {path:'order-search', component: OrderSearchComponent}, 
    {path:'customer-search', component:CostumerSearchComponent}
];
