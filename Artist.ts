import {Albums} from './Albums'

export class Artist {
    id: string;
    name: string;
    genres: any;
    albums: Albums[];
    popularity: number;
}