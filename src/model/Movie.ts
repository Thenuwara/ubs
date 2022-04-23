export interface IMovie {
    id?: string;
    title?: string;
    image?: string;
    fullTitle?: string;
    rank?: number;
    year?: number;
    imDbRating?: string;
    imDbRatingCount?: string;
    crew?: string;
  }
  
  export class Movie implements IMovie {
    constructor(
      public id?: string,
      public title?: string,
      public image?: string,
      public fullTitle?: string,
      public rank?: number,
      public year?: number,
      public imDbRating?: string,
      public imDbRatingCount?: string,
      public crew?: string,
    ) {}
  }
  