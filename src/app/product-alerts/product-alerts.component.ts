import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  styleUrls: ['./product-alerts.component.css'], // Correct property name
  // Don't need standalone and imports here
  templateUrl: './product-alerts.component.html',
})

export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
