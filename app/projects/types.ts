export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  category: 'texture-pack' | 'addon' | 'skin' | 'map';
  version: string;
  size: string;
  stars: number;
  previewImages: string[];
  downloadUrl: string;
  author?: {
    name: string;
    avatar: string;
    role: string;
  };
  credits: {
    name: string;
    project: string;
    author: string;
    link: string;
  }[];
  terms: {
    allowed: string[];
    prohibited: string[];
  };
} 