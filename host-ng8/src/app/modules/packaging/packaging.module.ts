import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PackagingRoutingModule } from "./packaging-routing.module";
import { PackagingPageComponent } from "./packaging-page/packaging-page.component";
import { PackagingTableComponent } from "./components/packaging-table/packaging-table.component";
import { PackagingSearchComponent } from "./components/packaging-search/packaging-search.component";
import { PackagingAddPageComponent } from "./packaging-add-page/packaging-add-page.component";
import { PackagingEditPageComponent } from "./packaging-edit-page/packaging-edit-page.component";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { AddNewPackagingButtonComponent } from "./components/add-new-packaging-button/add-new-packaging-button.component";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PackagingFormComponent } from "./components/packaging-form/packaging-form.component";
import { DeleteButtonComponent } from "./components/packaging-table/delete-button/delete-button.component";
import { PackagingHeaderComponent } from './components/packaging-header/packaging-header.component';
import { ParagraphComponent } from '../../components/paragraph/paragraph.component';

@NgModule({
  declarations: [
    PackagingPageComponent,
    PackagingTableComponent,
    PackagingSearchComponent,
    PackagingAddPageComponent,
    PackagingEditPageComponent,
    AddNewPackagingButtonComponent,
    PackagingFormComponent,
    DeleteButtonComponent,
    PackagingHeaderComponent,
    ParagraphComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PackagingRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
  ],
})
export class PackagingModule { }
