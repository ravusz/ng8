import { Component, OnInit } from "@angular/core";
import { Packaging, PackagingService } from "../services/packaging.service";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-packaging-edit-page",
  templateUrl: "./packaging-edit-page.component.html",
})
export class PackagingEditPageComponent implements OnInit {
  constructor(
    private packagingService: PackagingService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
  ) {}
  packaging: Packaging;

  ngOnInit() {
    this.packagingService
      .getById(this.route.snapshot.paramMap.get("id"))
      .subscribe(
        (data) => {
          this.packaging = data;
        },
        (error) => {
          this.messageService.add({
            severity: "error",
            summary: "Błąd podczas pobierania opakowania",
            detail:
              error && error.message
                ? error.message
                : "Spróbuj ponownie później",
          });
        },
      );
  }

  onSubmit(packaging: Packaging) {
    this.packagingService
      .update(this.route.snapshot.paramMap.get("id"), packaging)
      .subscribe(
        (data) => {
          this.messageService.add({
            severity: "success",
            summary: "Pomyślnie zaktualizowano opakowanie",
            detail: `Opakowanie ${data.name} zostało zaktualizowane`,
          });
          this.router.navigate(["/packaging"]);
        },
        (error) => {
          this.messageService.add({
            severity: "error",
            summary: "Błąd podczas aktualizacji opakowania",
            detail:
              error && error.message
                ? error.message
                : "Spróbuj ponownie później",
          });
        },
      );
  }
}
