import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

}
