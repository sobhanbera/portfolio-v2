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
    bodyHeader: string
    body: string
    readTime: number
    shortDescription: string
    timestamp: Date | number
    artwork: string
    pageTitle: string
    link: string
    mediumLink: string
    property: string
    tags: string[]
}

/**
 * this object is a blueprint to carry the project data which is displayed in the website
 * id: unique id of the project
 * year: in which year does the project was done or carried out
 * title: name of the project
 * techstacks: list of technologies used in the project
 * link: any reference link for the project
 * github: if public repo is there
 * playstore: if it was any android app
 * company: for what company this was made
 * companyURL: official website of the company
 * otherLink: there might be other kind of list too
 * iconType: what type of icon to show in the project card's header's right side
 */
export interface ProjectObject {
    id: number | string
    year: number
    title: string
    techstacks: string[]
    link: string
    github?: string
    playstore?: string
    otherLink?: string
    org: string
    orgURL?: string
    description: string
    iconType: 'code' | 'web' | 'android'
}
