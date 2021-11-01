import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {LanguageDetectionWrapper, SentimentAnalysisWrapper} from "../model";

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  private readonly apiUrl = environment.languageDetectionApiUrl

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  detectLanguage(text: string, clean: boolean): Observable<LanguageDetectionWrapper>{
    let token = this.tokenService.getToken()
    return this.httpClient.get<LanguageDetectionWrapper>(`${this.apiUrl}?text=${text}&clean=${clean}&token=${token}`)
  }
}
