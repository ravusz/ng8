import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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

  constructor(private http: HttpClient) {}

  getAll(): Observable<Packaging[]> {
    return this.http.get<Packaging[]>(this.apiUrl);
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
