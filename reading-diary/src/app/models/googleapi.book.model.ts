import { VolumeInfo } from "./volumeInfo.model";

export interface GoogeApiBook {
  kind: string;
  id: number;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  isbn: string;
}