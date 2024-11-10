import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ConfigService } from './services/config.service';
import { FlexiconsComponent } from './components/flexicons/flexicons.component';
import { PrimeconfigModule } from './primeconfig/primeconfig.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeconfigModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'clientapi';
  menus!: MenuItem[];

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.initMenu();

    this.configService.loadProductsFromFakeApi().subscribe((products) => {
      console.log(products);
    });
  }

  initMenu() {
    this.menus = [
      { label: 'Dashboard', routerLink: 'dashboard', icon: 'pi pi-slack' },
      { label: 'Home', routerLink: 'home', icon: 'pi pi-shop' },
      { label: 'About', routerLink: 'about', icon: 'pi  pi-user' },
      { label: 'Products', routerLink: 'products', icon: 'pi  pi-amazon' },
      { label: 'Template', routerLink: 'template', icon: 'pi  pi-book' },
      { label: 'Profile', routerLink: 'profile/1234', icon: 'pi  pi-discord' },
    ];
  }
}
