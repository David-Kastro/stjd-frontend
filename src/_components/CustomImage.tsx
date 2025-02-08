import Image, { ImageProps } from 'next/image'

// interface Props extends ImageProps {}

const MEDIA_URL = 'https://stjd-strapi-49c7f8c3b0f7.herokuapp.com'

export default function CustomImage({ src, alt, ...props }: ImageProps) {
  return <Image {...props} src={`${MEDIA_URL}${src}`} alt={alt || 'image'} />
}
