import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {TokenEditorComponent} from "../components/token-editor/token-editor.component";
import {TokenService} from "./token.service";
import {Observable} from "rxjs";
import {Entity, Wrapper} from "../model";

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {

  private readonly apiUrl = environment.entityExtractionApiUrl
  private token: string = ''

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  extractEntities(text: string, minConfidence: number, include: string[]): Observable<Wrapper>{
    this.token = this.tokenService.getToken()
    return this.httpClient.get<Wrapper>(`${this.apiUrl}?text=${text}&min_confidence=${minConfidence}&include=${include}&token=${this.token}`).pipe()

    // this.httpClient.get<ArrayBuffer>(`${this.apiUrl}`,{
    // text: text,
    // min_confidence: minConfidence,
    // include: include,
    // token: this.token})
  }

  downloadImage(imageUrl: string): Observable<Blob> {
    return this.httpClient.get(imageUrl, { responseType: 'blob'}).pipe()
  }
}
