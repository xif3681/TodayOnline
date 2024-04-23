
export type ArticleType = {
  author: string,
  brief: string
  title: string,
  nid: string,
  tldr: string,
  image: {
    description: string,
    media_image: string
  },
  publishdate: string,
  lastupdated: string,
  content: Array<{
    id: string,
    body: string
    title: string,
    sub_description: string,
    newsletter_image: string,
    placeholder: string,
    label:string
  }>,
  category: Array<{
    id: string,
    name: string,
    link: string,
    landing_page: string
  }>,
  byline_detail: Array<
    {
      id: string,
      title: string
      summary: string,
      created: string,
      hero_media: {
        media_image: string,
        name: string
      }
    }>,
  topics: Array<{
    id: string,
    name: string,
    link:string
  }>

}

export type ArticleLikeType = {
  id: string,
  image:string,
  author: string,
  brief: string
  title: string,
  nid: string,
  tldr: string,
  publishdate: string,
  lastupdated:string

}

export type UserRouter = {
  name: string,
  id: number,
  path: string
}















