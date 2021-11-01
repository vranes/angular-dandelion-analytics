import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {TextSimilarityWrapper} from "../model";
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  private readonly apiUrl = environment.textSimilarityApiUrl

  constructor(private httpClient: HttpClient, private tokenService: TokenService, private loggerService: LoggerService) { }

  compareTexts(text1: string, text2: string): Observable<TextSimilarityWrapper>{
    let token = this.tokenService.getToken()
    let url = `${this.apiUrl}?text1=${text1}&text2=${text2}&token=${token}`

    this.loggerService.logAction(new Date(), "GET", url)

    return this.httpClient.get<TextSimilarityWrapper>(url)
  }
}
