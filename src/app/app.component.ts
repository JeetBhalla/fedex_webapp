import { Component, ChangeDetectorRef, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,
    FooterComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fedex_webapp';
  showSubMenu: boolean = false;

  // toggleSubMenu(isVisible: boolean): void {
  //   console.log("isvisible-", isVisible)
  //   this.showSubMenu = true;
  //   this.cdr.detectChanges();
  // }

  // @HostListener('window:click', ['$event']) 
  // onWindowClick(event: MouseEvent): void {
  //   this.showSubMenu = false;
   
  // }

}
