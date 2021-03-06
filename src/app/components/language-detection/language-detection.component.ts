import { Component, OnInit } from '@angular/core';
import {LanguageDetectionService} from "../../services/language-detection.service";
import {Language} from "../../model";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string = ''
  clean: boolean = false
  languages: Language[] = []
  errorMessage: string = ''

  constructor(private service: LanguageDetectionService) { }

  ngOnInit(): void {}

  detectLanguage(){
    this.languages = []
    this.errorMessage = ''
    this.service.detectLanguage(this.text, this.clean).subscribe((wrapper) => {
      wrapper.detectedLangs.forEach(language => {
          this.languages.push(language)
        })
    }, error => this.errorMessage = "Language not recognized. Please edit your input.")
  }

}
