import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {LanguageDetectionWrapper} from "../model";
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  private readonly apiUrl = environment.languageDetectionApiUrl

  constructor(private httpClient: HttpClient, private tokenService: TokenService, private loggerService: LoggerService) { }

  detectLanguage(text: string, clean: boolean): Observable<LanguageDetectionWrapper>{
    let token = this.tokenService.getToken()
    let url = `${this.apiUrl}?text=${text}&clean=${clean}&token=${token}`

    this.loggerService.logAction(new Date(), "GET", url)

    return this.httpClient.get<LanguageDetectionWrapper>(url)
  }
}
