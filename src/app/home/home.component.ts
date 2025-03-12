import { Component } from '@angular/core';
import { DataserService } from '../dataser.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  items: any[] = [];

  constructor(private ser: DataserService) {
    this.getData();
  }

  getData() {
    this.ser.getData().subscribe((data: any[]) => {
      this.items = data;
    });
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
