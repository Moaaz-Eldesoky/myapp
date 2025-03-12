import { Component } from '@angular/core';
import { DataserService } from '../dataser.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  items: any[] = [];
  newItem: any = {};
  newItemDataKey: string = '';
  newItemDataValue: any = '';

  constructor(private ser: DataserService) {
    this.getData();
  }

  getData() {
    this.ser.getData().subscribe((data: any[]) => {
      this.items = data;
    });
  }

  addItem(item: any) {
    this.ser.addData(item).subscribe((newItem) => {
      this.items.push(newItem);
      this.newItem = {};
    });
  }

  removeItem(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
    alert(`Object with id = ${id}, has been deleted.`);
  }

  addDataToNewItem(): void {
    if (!this.newItem.data) {
      this.newItem.data = {};
    }
    this.newItem.data[this.newItemDataKey] = this.newItemDataValue;
    this.newItemDataKey = '';
    this.newItemDataValue = '';
  }

  removeDataFromNewItem(key: string): void {
    delete this.newItem.data[key];
  }

  objectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }
}
