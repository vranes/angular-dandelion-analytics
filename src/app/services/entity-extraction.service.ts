import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {TokenEditorComponent} from "../../components/token-editor/token-editor.component";

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {

  private readonly apiUrl = environment.entityExtractionApiUrl

  constructor(private httpClient: HttpClient) { }

  extractEntities(text: string, minConfidence: number, include: string[] ){
    token = localStorage.getItem("token") || ''
    return this.httpClient.get<Object[]>(`${this.apiUrl}/text=${text}&min_confidence=${minConfidence}&include=${include}&token=${}`)

  }
}
