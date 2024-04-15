import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FipeService {
  entity: string;
  constructor(private http: HttpClient) {
    this.entity = "";
  }

  getMarcas(url: string): Observable<any[]> {
    return this.http.get<any[]>(
      url
    );
  }

  getModelos(url: string, marcaId: string): Observable<any> {
    return this.http.get<any>(
      `${url}/${marcaId}/modelos`
    );
  }

  getAnos(url: string, marcaId: string, modeloId: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${url}/${marcaId}/modelos/${modeloId}/anos`
    );
  }

  getDetalhes(
    url: string,
    marcaId: string,
    modeloId: string,
    anoId: string
  ): Observable<any> {
    return this.http.get<any>(
      `${url}/${marcaId}/modelos/${modeloId}/anos/${anoId}`
    );
  }
}
