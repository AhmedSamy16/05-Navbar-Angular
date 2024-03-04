import { Component } from '@angular/core';
import MenuItems from '../../utils/menuItems';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isClicked = false
  items = MenuItems
  readonly closeIcon = 'assets/close.png'
  readonly menuIcon = 'assets/menu.png'

  handleClick() {
    this.isClicked = !this.isClicked
  }
}
