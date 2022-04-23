export interface IBook {
  id?: string;
  volumeInfo?: IVolumeInfo;
}

export interface IVolumeInfo {
  title: string;
  description: string;
  publisher: string;
  publishedDate: string;
  categories: string[];
  authors: string[];
  imageLinks: any;
}

export class Book implements IBook {
  constructor(
    public id?: string,
    public volumeInfo?: IVolumeInfo,
  ) {}
}
