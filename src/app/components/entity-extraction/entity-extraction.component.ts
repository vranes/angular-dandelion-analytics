import { Component, OnInit } from '@angular/core';
import {EntityExtractionService} from "../../services/entity-extraction.service";
import {Entity} from "../../model";

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
  errorMessage: string = ''

  constructor(private service: EntityExtractionService){ }

  ngOnInit(): void {
  }

  extractEntity(){
    this.include = []
    this.entities = []
    this.errorMessage = ''

    if(this.abstract)
      this.include.push('abstract')
    if(this.image)
      this.include.push('image')
    if(this.categories)
      this.include.push('categories')

    this.service.extractEntities(this.text, this.minConfidence*0.01, this.include).subscribe((wrapper) => {
      wrapper.annotations.forEach(annotation =>{
          let entity = new Entity
          entity.spot = annotation.spot || ''
          entity.abstract = annotation.abstract || ''
          entity.categories = annotation.categories || ''

          if (annotation.image) {
             entity.image = annotation.image.full || ''
          }
          this.entities.push(entity)
      })
    }, error => this.errorMessage = "Language not recognized. Please edit your input.")

  }


}
