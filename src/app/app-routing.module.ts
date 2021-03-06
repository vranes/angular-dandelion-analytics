import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./components/app/app.component";
import {TokenEditorComponent} from "./components/token-editor/token-editor.component";
import {HomeComponent} from "./components/home/home.component";
import {EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./components/language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";
import {AuthGuard} from "./auth.guard";
import {LoggerComponent} from "./components/logger/logger.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "token",
    component: TokenEditorComponent
  },
  {
    path: "entity-extraction",
    component: EntityExtractionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "text-similarity",
    component: TextSimilarityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "language-detection",
    component: LanguageDetectionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "sentiment-analysis",
    component: SentimentAnalysisComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "logs",
    component: LoggerComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
