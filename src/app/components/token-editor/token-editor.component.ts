import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-token-editor',
  templateUrl: './token-editor.component.html',
  styleUrls: ['./token-editor.component.css']
})
export class TokenEditorComponent implements OnInit {

  token: string = ''

  constructor(private tokenService: TokenService) {
    // this.token = localStorage.getItem("token") || ''
  }

  ngOnInit(): void {
    this.token = this.tokenService.getToken()
  }

  changeToken(newToken: HTMLInputElement): void {
    this.token = newToken.value
    this.tokenService.setToken(this.token)
  }

}
