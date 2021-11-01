import { Injectable } from '@angular/core';
import {Log} from "../model";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  logs: Log[] = []

  constructor() { }

  logAction(date: Date, action: string, url: string){
    this.logs.push(new Log(date, action, url))
  }

  getLogs(): Log[] {
    return this.logs
  }
}
