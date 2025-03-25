import { IndustryIdentifiers } from "./industryIdentifier.model";

export interface VolumeInfo {
    title: string;
    authors: Array<string>;
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: Array<IndustryIdentifiers>;
    pageCount: number;
    dimensions: {
        height: string,
        width: string,
        thickness: string
    }
}