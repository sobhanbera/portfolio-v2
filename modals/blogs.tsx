/**
 * id: unique string to denote every blog
 * title: the main title of the blog
 * body: the main body or the main blog
 * shortDescription: any short description about the blog if any
 * timestamp: when the blog was published
 * artwork: any image for header or thumbnail
 * pageTitle: the actual title of the website
 * isBlog: since the blog could be for any other page too, so for recognizing blogs this property should exist
 * link: the link when the particular blog will be shown
 * mediumLink: link to the actual blogpost
 * property: any property string, this will be shown before the title
 * tags: array of string which denotes tags for the blogs
 **/
export interface Blog {
    id: string
    title: string
    body: string
    shortDescription: string
    timestamp: Date | number
    artwork: string
    pageTitle: string
    link: string
    mediumLink: string
    property: string
    tags: string[]
}
