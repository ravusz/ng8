import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-packaging-search",
  templateUrl: "./packaging-search.component.html",
})
export class PackagingSearchComponent implements OnInit {
  searchControl = new FormControl("");
  @Output() search = new EventEmitter<string>();

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.search.emit(value);
      });
  }
}
