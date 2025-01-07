import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BusinessfedexComponent } from './businessfedex/businessfedex.component';
import { PeoplefedexComponent } from './peoplefedex/peoplefedex.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,
    FooterComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fedex_webapp';
}
