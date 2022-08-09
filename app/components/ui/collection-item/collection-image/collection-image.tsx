import Image from 'next/image';


type CollectionImageProps = {
  imageSrc: string;
  title: string;
};

function CollectionImage({
  title,
  imageSrc,
}: CollectionImageProps): JSX.Element {
  return <Image alt={title} src={imageSrc} layout='fill' draggable={false} />;
}

export default CollectionImage;
