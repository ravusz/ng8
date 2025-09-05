import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagingRoutingModule } from './packaging-routing.module';
import { PackagingPageComponent } from './packaging-page/packaging-page.component';
import { PackagingTableComponent } from './components/packaging-table/packaging-table.component';
import { PackagingSearchComponent } from './components/packaging-search/packaging-search.component';
import { PackagingAddPageComponent } from './packaging-add-page/packaging-add-page.component';
import { PackagingEditPageComponent } from './packaging-edit-page/packaging-edit-page.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AddNewPackagingButtonComponent } from './components/add-new-packaging-button/add-new-packaging-button.component';
@NgModule({
  declarations: [PackagingPageComponent, PackagingTableComponent, PackagingSearchComponent, PackagingAddPageComponent, PackagingEditPageComponent, AddNewPackagingButtonComponent],
  imports: [
    CommonModule,
    RouterModule,
    PackagingRoutingModule,
    TableModule,
    ButtonModule
  ]
})
export class PackagingModule { }
