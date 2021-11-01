export class Entity {
  spot: string = ''
  image: string = ''
  public abstract: string = ''
  categories: string[] = []
}

export interface EntityExtractionWrapper{
  annotations: any[]
}

export interface TextSimilarityWrapper{
  similarity: number
}

export interface LanguageDetectionWrapper{
  detectedLangs: Language[]
}

export class Language{
  lang: string = ''
  confidence: number = -1
}

export interface SentimentAnalysisWrapper{
  sentiment: Sentiment
}

export class Sentiment{
  score: number = -1
  type: string = ''
}

export class Log{

  date: Date
  action: string
  url: string

  constructor(date: Date, action: string, url: string) {
    this.date = date
    this.action = action
    this.url = url
  }

  toString(): string{
    return this.action + " " + this.url
  }

}


