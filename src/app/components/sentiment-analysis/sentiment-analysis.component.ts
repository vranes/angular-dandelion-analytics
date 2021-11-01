import { Component, OnInit } from '@angular/core';
import {SentimentAnalysisService} from "../../services/sentiment-analysis.service";
import {Sentiment} from "../../model";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string = ''
  language: string = 'auto'
  sentiment: Sentiment = new Sentiment()

  constructor(private service: SentimentAnalysisService) { }

  ngOnInit(): void {
  }

  setLanguage(event: Event){
    this.language = (<HTMLInputElement>event.target).value
  }

  analyzeSentiment(){
    this.sentiment = new Sentiment()
    this.service.analyzeSentiment(this.text, this.language).subscribe(wrapper => {
      this.sentiment = wrapper.sentiment
    })
  }

}
