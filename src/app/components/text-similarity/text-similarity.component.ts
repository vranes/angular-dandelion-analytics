import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    location.replace('/')
  }

}
