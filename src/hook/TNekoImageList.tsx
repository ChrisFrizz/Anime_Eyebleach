export type TNekoImageList = INekoImage[]

export interface INekoImage {
  "success"?: Boolean,
  "status"?: number,
  "key"?: undefined | string,
  "count"?: number,
  "id"?: string,
  "colors"?: { 
    "main": "#Hex", 
    "palette": [
      "#Hex1", "#Hex2", "#Hex3", "#Hex4", "#Hex5", 
      "#Hex6", "#Hex7", "#Hex8", "#Hex9", "#Hex10", 
      "#Hex11", "#Hex12", "#Hex13", "#Hex14"] 
    },
  "image": {
    "original": { 
      "url": string, 
      "extension": string 
    },
    "compressed": { 
      "url": string, 
      "extension": string 
    }
  },
  "metadata"?: { 
    "original": { 
      "width": number, 
      "height": number, 
      "size": number, 
      "extension": string 
    }, 
    "compressed"?: { 
      "width": number, 
      "height": number, 
      "size": number, 
      "extension": string 
    } 
  },
  "category"?: string,
  "tags": string[],
  "rating"?: "safe" | "suggestive",
  "anime"?: { 
    "title": string | null, 
    "character": string | null 
  },
  "source": { 
    "url": string | null, 
    "direct": string | null 
  },
  "attribution": { 
    "artist": { 
      "username": string | null, 
      "profile": string | null 
    }, 
    "copyright": string | null 
  }
}

