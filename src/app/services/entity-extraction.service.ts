import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {TokenService} from "./token.service";
import {Observable} from "rxjs";
import {EntityExtractionWrapper} from "../model";
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {

  private readonly apiUrl = environment.entityExtractionApiUrl

  constructor(private httpClient: HttpClient, private tokenService: TokenService, private loggerService: LoggerService) { }

  extractEntities(text: string, minConfidence: number, include: string[]): Observable<EntityExtractionWrapper>{
    let token = this.tokenService.getToken()
    let url = `${this.apiUrl}?text=${text}&min_confidence=${minConfidence}&include=${include}&token=${token}`

    this.loggerService.logAction(new Date(), "GET", url)

    return this.httpClient.get<EntityExtractionWrapper>(url)
  }

}
