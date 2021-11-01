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

  calculateColor(): string{
    let t = (this.sentiment.score + 1) / 2
    let r = Math.round(255 + (0 - 255)*t)
    let g = Math.round(0 + (255 - 0)*t)
    let b = 0
    return "rgb("+ r +","+ g +","+ b +")"
  }


}
