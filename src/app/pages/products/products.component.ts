import { Component, inject, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ConfigService } from '../../services/config.service';
import { Product } from '../../types';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardModule, ButtonModule, NgxSpinnerModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  spinner = inject(NgxSpinnerService);
  configService = inject(ConfigService);

  products: Product[] = [];

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 100);

    this.configService.loadProductsFromFakeApi().subscribe((products) => {
      this.products = products;
    });
  }
}
