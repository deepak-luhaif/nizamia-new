export type InitiativeProgram = {
  title: string;
  description: string;
  image?: string;
  bulletPoints?: { text: string; description: string }[];
};

export type Initiative = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  programs: InitiativeProgram[];
  video: string;
  gallary: string[];
  image: string;
  isImageGrid?: any;

  sub_tagline: string;
  quote: string;
  sub_title: string;
  video_story?: string;
  video_tagline?: string;
};

export type Initiatives = {
  [key: string]: Initiative;
};
