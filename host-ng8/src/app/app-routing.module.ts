import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "packaging",
    loadChildren: () =>
      import("./modules/packaging/packaging.module").then(
        (m) => m.PackagingModule,
      ),
  },
  { path: "", redirectTo: "/packaging", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
