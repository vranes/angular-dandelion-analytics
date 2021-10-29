import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-editor',
  templateUrl: './token-editor.component.html',
  styleUrls: ['./token-editor.component.css']
})
export class TokenEditorComponent implements OnInit {

  token: string

  constructor() {
    this.token = localStorage.getItem("token") || ''
  }

  ngOnInit(): void {
  }

  changeToken(newToken: HTMLInputElement): void {
    this.token = newToken.value
    localStorage.setItem("token", this.token)
  }

  getToken(): string {
    return this.token
  }

}
