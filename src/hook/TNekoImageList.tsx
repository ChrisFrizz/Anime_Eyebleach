export type TNekoImageList = INekoImage[]

export interface INekoImage {
  id: string
  image: {
    original: {
        url: string
        extention: string
    }
    compressed: {
        url: string
        extention: string
    }
  }
  category: string
  tags: string[]
  rating: string
  anime: {
    title: string | null
    character: string | null
  }
  source: {
    url: URL
    direct: URL
  }
  attribution: {
    artist: {
        username: URL
        profile: URL
    }
    copyright: string
  }
}

