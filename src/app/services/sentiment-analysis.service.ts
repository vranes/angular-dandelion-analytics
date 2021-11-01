import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {SentimentAnalysisWrapper, Wrapper} from "../model";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  private readonly apiUrl = environment.sentimentAnalysisApiUrl

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  analyzeSentiment(text: string, language: string): Observable<SentimentAnalysisWrapper>{
    let token = this.tokenService.getToken()
    return this.httpClient.get<SentimentAnalysisWrapper>(`${this.apiUrl}?text=${text}&lang=${language}&token=${token}`)
  }
}
