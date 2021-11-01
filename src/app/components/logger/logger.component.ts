import { Component, OnInit } from '@angular/core';
import {Log} from "../../model";
import {LoggerService} from "../../services/logger.service";

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  logs: Log[] = []

  constructor(private service: LoggerService) { }

  ngOnInit(): void {
    this.logs = this.service.getLogs()
  }

}
