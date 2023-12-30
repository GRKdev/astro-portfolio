export type HeadTags = {
  title?: string;
  description?: string;
  noindex?: boolean;
  og?: {
    title: string;
    type: string;
    description: string;
    image: string;
    img_logo: string;
    alt: string;
  };
};
