import { SaleInfo } from "./saleInfo.model";
import { VolumeInfo } from "./volumeInfo.model";

export interface GoogleApiBook {
  kind: string;
  id: number;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
}