import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TableColumn {
  key: string;
  label: string;
  type?: 'text' | 'badge' | 'status' | 'strong';
  badgeClass?: string;
  align?: 'left' | 'center' | 'right';
}

@Component({
  selector: 'app-admin-table',
  imports: [CommonModule],
  templateUrl: './admin-table.html',
  styleUrl: './admin-table.css',
})
export class AdminTableComponent {
  title = input.required<string>();
  count = input.required<number>();
  columns = input.required<TableColumn[]>();
  data = input.required<any[]>();
  
  onDelete = output<number>();

  deleteItem(id: number) {
    this.onDelete.emit(id);
  }

  getCellValue(item: any, column: TableColumn): any {
    const keys = column.key.split('.');
    let value = item;
    for (const key of keys) {
      value = value?.[key];
    }
    return value;
  }

  getStatusClass(status: string): string {
    return `status-${status.toLowerCase()}`;
  }
}
