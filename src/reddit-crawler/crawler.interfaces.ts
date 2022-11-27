import { SortedListingOptions } from "snoowrap/dist/objects"


export interface TestID {
    id: Number,
}

interface Response{
    status: Number,
    data?: Array<any>,
    error?: {
        message: String,
        errorTrace?: any
    }
}

export interface ContentManagerResponse extends Response{
    id?: Number,
    name?: String
}

export interface RedditCrawlerRequest extends SortedListingOptions{
    subName: String,
}

export interface RedditCrawlerResponse extends Response{
}