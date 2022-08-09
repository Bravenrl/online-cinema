export type TypeGalleryItem = {
  posterPath: string;
  name: string;
  link: string;
  content?: {
    title: string;
    subTitle?: string;
  };
};

export type TypeCollection = {
  _id: string;
  image: string;
  title: string;
  slug: string;
};
