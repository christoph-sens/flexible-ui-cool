import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { MenuComponent } from './menu/menu.component';

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	imports: [CommonModule, RouterOutlet, SearchComponent, MenuComponent]
})
export class AppComponent {
	
}
