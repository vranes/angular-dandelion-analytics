import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EntityExtractionService} from "../../services/entity-extraction.service";
import {Entity, Wrapper} from "../../model";
import {Observable} from "rxjs";
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  text: string = ''
  minConfidence: number = 60
  abstract: boolean = true
  image: boolean = false
  categories: boolean = false
  private include: string[] = []
  entities: Entity[] = []
  wrapper: Wrapper = new class implements Wrapper {
    annotations: any[] = [];
    lang: string = '';
    langConfidence: number = 0;
    time: number = 0;
    timestamp: string = '';
  }

  constructor(private service: EntityExtractionService){ }

  ngOnInit(): void {
  }

  extractEntity(){
    console.log(this.text)
    this.include = []

    if(this.abstract)
      this.include.push('abstract')
    if(this.image)
      this.include.push('image')
    if(this.categories)
      this.include.push('categories')

    this.service.extractEntities(this.text, this.minConfidence*0.01, this.include).subscribe((entities) => {
      this.wrapper = entities
      this.entities = []
      this.wrapper.annotations.forEach(annotation =>{
          var entity = new Entity
          entity.spot = annotation.spot || ''
          entity.abstract = annotation.abstract || ''
          entity.categories = annotation.categories || ''

          if (annotation.image) {
             entity.image = annotation.image.full || ''
          }
          this.entities.push(entity)
      })
    })

  }


}
