import { VolumeInfo } from "./volumeInfo.model";

export interface Book {
  kind: string;
    id: number;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    isbn: string;
  }