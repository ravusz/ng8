import { Component, Input } from "@angular/core";
import { ConfirmationService } from "primeng/api";
import {
  Packaging,
  PackagingService,
} from "../../../services/packaging.service";
import { MessageService } from "primeng/api";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-delete-button",
  templateUrl: "./delete-button.component.html",
})
export class DeleteButtonComponent {
  @Input() item: Packaging;

  constructor(
    private confirmationService: ConfirmationService,
    private packagingService: PackagingService,
    private messageService: MessageService,
  ) { }

  onDelete() {
    this.confirmationService.confirm({
      header: "Czy chcesz usunąć?",
      acceptLabel: "Tak",
      rejectLabel: "Nie",
      message: `Czy chcesz usunąć ${this.item.name} ?`,
      accept: () => {
        this.packagingService
          .delete(this.item.id)
          .pipe(tap(() => this.packagingService.getAll()))
          .subscribe(
            (data) => {
              this.messageService.add({
                severity: "success",
                summary: `Pomyślnie usunięto ${data.name}`,
                detail: `ID: ${data.id}`,
              });
            },
            (error) => {
              this.messageService.add({
                severity: "error",
                summary: "Błąd podczas usuwania",
                detail:
                  error && error.message
                    ? error.message
                    : "Spróbuj ponownie później",
              });
            },
          );
      },
    });
  }
}
