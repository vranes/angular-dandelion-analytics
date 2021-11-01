export class Entity {
  spot: string = ''
  image: string = ''
  public abstract: string = ''
  categories: string[] = []
}

export class Image {
  full: string = ''
  thumbnail: string = ''
}

export interface Wrapper{
  time: number,
  annotations: any[],
  lang: string,
  langConfidence: number,
  timestamp: string
}

export interface TextSimilarityWrapper{
  timestamp: string,
  time: number,
  lang: string,
  langConfidence: number,
  similarity: number
}


