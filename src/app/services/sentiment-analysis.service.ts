import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {SentimentAnalysisWrapper} from "../model";
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  private readonly apiUrl = environment.sentimentAnalysisApiUrl

  constructor(private httpClient: HttpClient, private tokenService: TokenService, private loggerService: LoggerService) { }

  analyzeSentiment(text: string, language: string): Observable<SentimentAnalysisWrapper>{
    let token = this.tokenService.getToken()
    let url = `${this.apiUrl}?text=${text}&lang=${language}&token=${token}`

    this.loggerService.logAction(new Date(), "GET", url)

    return this.httpClient.get<SentimentAnalysisWrapper>(url)
  }
}
