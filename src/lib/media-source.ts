const MEDIA_URL = 'https://stjd-strapi-49c7f8c3b0f7.herokuapp.com'

export function mediaSource(src: string) {
  return `${MEDIA_URL}${src}`
}
