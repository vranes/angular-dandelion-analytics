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

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  extractEntities(text: string, minConfidence: number, include: string[]): Observable<Wrapper>{
    let token = this.tokenService.getToken()
    return this.httpClient.get<Wrapper>(`${this.apiUrl}?text=${text}&min_confidence=${minConfidence}&include=${include}&token=${token}`)
  }

}
