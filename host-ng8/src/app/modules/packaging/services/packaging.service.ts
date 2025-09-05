import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";

export interface Packaging {
  id?: string;
  code: string;
  name: string;
  brand: string;
  availableQty: number;
}

@Injectable({
  providedIn: "root",
})
export class PackagingService {
  private apiUrl = "http://localhost:3001/packagings";

  private packagingListSubject = new BehaviorSubject<Packaging[]>([]);
  packagingList$ = this.packagingListSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAll(): void {
    this.http.get<Packaging[]>(this.apiUrl)
      .subscribe(data => this.packagingListSubject.next(data));
  }

  getById(id: string): Observable<Packaging> {
    return this.http.get<Packaging>(`${this.apiUrl}/${id}`);
  }

  create(packaging: Packaging): Observable<Packaging> {
    return this.http.post<Packaging>(this.apiUrl, packaging);
  }

  update(id: string, packaging: Packaging): Observable<Packaging> {
    return this.http.put<Packaging>(`${this.apiUrl}/${id}`, packaging);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
