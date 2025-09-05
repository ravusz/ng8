import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PackagingPageComponent } from "./packaging-page/packaging-page.component";
import { PackagingAddPageComponent } from "./packaging-add-page/packaging-add-page.component";
import { PackagingEditPageComponent } from "./packaging-edit-page/packaging-edit-page.component";

const routes: Routes = [
  { path: "", component: PackagingPageComponent },
  { path: "add", component: PackagingAddPageComponent },
  { path: ":id/edit", component: PackagingEditPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackagingRoutingModule {}
