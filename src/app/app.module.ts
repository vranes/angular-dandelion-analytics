import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TokenEditorComponent } from './components/token-editor/token-editor.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    TokenEditorComponent,
    HomeComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent
    // definisu se sve dodatne komponente projekta: navbar, footer, rute
    // angular cli tool sam dodaje
  ],
  imports: [
    BrowserModule,    // modul za ng for iteracije za dinamicko generisanje htmla itd
    AppRoutingModule,  // modul za rute
    FormsModule,        // ng model za two way binding
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]   // registracija osnovne prve komponente koja ce biti prikazana
})
export class AppModule { }
