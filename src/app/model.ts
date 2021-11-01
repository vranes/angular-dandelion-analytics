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

//
// {time: 1, annotations: Array(2), lang: 'en', langConfidence: 1, timestamp: '2021-10-30T21:15:50.230'}
// annotations: (2) [{…}, {…}]
// lang: "en"
// langConfidence: 1
// time: 1
// timestamp: "2021-10-30T21:15:50.230"
}
