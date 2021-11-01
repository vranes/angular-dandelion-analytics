import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {TextSimilarityWrapper, Wrapper} from "../model";

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  private readonly apiUrl = environment.textSimilarityApiUrl
  private token: string = ''

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  compareTexts(text1: string, text2: string): Observable<TextSimilarityWrapper>{
    this.token = this.tokenService.getToken()
    return this.httpClient.get<TextSimilarityWrapper>(`${this.apiUrl}?text1=${text1}&text2=${text2}&token=${this.token}`)
  }
}
