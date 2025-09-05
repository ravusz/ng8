import { Component, OnInit } from "@angular/core";
import { Packaging, PackagingService } from "../services/packaging.service";
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: "app-packaging-page",
  templateUrl: "./packaging-page.component.html",
})
export class PackagingPageComponent implements OnInit {
  packagingList$: Observable<Packaging[]>;
  searchTerm$ = new BehaviorSubject<string>('');

  constructor(private packagingService: PackagingService) { }

  ngOnInit() {
    this.packagingService.getAll();

    this.packagingList$ = combineLatest([
      this.packagingService.packagingList$,
      this.searchTerm$.pipe(startWith(''))
    ]).pipe(
      map(([list, searchTerm]) => {
        const term = searchTerm.toLowerCase();
        return list.filter(({ code, name }) =>
          code.toLowerCase().includes(term) || name.toLowerCase().includes(term)
        );
      })
    );
  }

  onSearch(searchTerm: string) {
    this.searchTerm$.next(searchTerm);
  }
}
