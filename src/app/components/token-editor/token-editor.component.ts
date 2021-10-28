import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-editor',
  templateUrl: './token-editor.component.html',
  styleUrls: ['./token-editor.component.css']
})
export class TokenEditorComponent implements OnInit {

  token: string
  isDisabled: boolean

  constructor() {
    this.token = localStorage.getItem("token") || ''
    this.isDisabled = true
  }

  ngOnInit(): void {
  }

  changeToken(event: Event): void {
    this.token = (<HTMLInputElement> event.target).value
    localStorage.setItem("token", this.token)
  }

  getToken(): string {
    return this.token
  }

}
