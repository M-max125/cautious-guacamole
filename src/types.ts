export type Hits = {
    collections: number;
    comments: number;
    downloads: number;
    id: number;
    imageHeight: number;
    imageSize: number;
    imageWidth: number;
    largeImageURL: string;
    likes: number;
    pageURL: string;
    previewHight: number;
    previewURL: string;
    previewWidth: number;
    tags: string;
    type: string;
    user: string;
    userImageURL: string;
    user_id: number;
    views: number;
    webFormatHeight: number;
    webformatURL: string;
    webformatWidth: number;
  }
  
  export type ResponseData = {
    hits: Hits[];
    total: number;
    totalHits: number;
  }