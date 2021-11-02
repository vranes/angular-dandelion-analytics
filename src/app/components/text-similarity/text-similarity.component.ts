import { Component, OnInit } from '@angular/core';
import {TextSimilarityService} from "../../services/text-similarity.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1: string = ''
  text2: string = ''
  similarity: number = -1

  constructor(private service: TextSimilarityService) { }

  ngOnInit(): void {}

  compareTexts(){
    this.similarity = -1
    this.service.compareTexts(this.text1, this.text2).subscribe((wrapper) => {
      this.similarity = wrapper.similarity
    })
  }

}
