/**
 * @interface di risposta dell'API
 */


export interface INekosiaResponse {
  success: boolean;
  status: number;
  id: string;
  image: {
    original: {
      url: string;
      extension: string;
    }
    compressed: {
      url: string;
      extension: string;
    };
  };
  tags?: string[];
  rating?: "safe" | "suggestive";
  anime?: {
    title: string | null,
    character: string | null
  },
  source?: {
    url: string | null,
    direct: string | null
  },
  attribution?: {
    artist: {
      username: string | null,
      profile: string | null
    },
    copyright?: string | null
  }
}