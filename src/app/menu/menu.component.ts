import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonComponent } from "../button/button.component";


@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    imports: [TabMenuModule, ButtonComponent]
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];
  activeItem!: MenuItem;

  ngOnInit(): void {
    this.items = [
      {label: "CUSTOMER SEARCH", routerLink:"/customer-search"},
      {label: "ORDER SEARCH", routerLink:"/order-search"},
      {label: "PRODUCT SEARCH", routerLink:"/product-search"},
    ];
    this.activeItem = this.items[0];
  }




}
