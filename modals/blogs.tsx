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
    body?: string
    shortDescription: string
    timestamp: Date | number
    artwork: string
    pageTitle: string
    isBlog: boolean
    link: string
    mediumLink: string
    property: string
    tags: string[]
}

export const BlogsList: Blog[] = [
    {
        id: '1',
        title: 'Deep Dive To Open Source',
        shortDescription:
            'Open-source software could change the complete workflow of a team or organization. Want to learn how? Want to know about Git? Follow the link!',
        timestamp: 1643029520306,
        artwork:
            'https://miro.medium.com/max/1400/1*7JtRMnaocFHa2rv1n1YVBQ.png',
        pageTitle: 'All about your first contribution in GitHub | Sobhan Bera',
        isBlog: true,
        link: 'deep-dive-to-open-source-with-github',
        mediumLink:
            'https://medium.com/dsc-ghrce/open-source-by-sobhanbera-2388c07b5117',
        property: 'First Blog',
        tags: ['Open Source', 'Git', 'GitHub', 'Command', 'Contribute'],
    },
]
