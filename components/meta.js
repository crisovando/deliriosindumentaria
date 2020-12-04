import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '@/lib/constants'

export default function Meta() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Ecommerce Delirios</title>
      <meta name="description" content="Comercio de ropa" />
      <meta name="keywords" content="tailwind,tailwindcss,tailwind css,css,starter template,free template,store template, shop layout, minimal, monochrome, minimalistic, theme, nordic" />

      <link href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap" rel="stylesheet" />
    </Head>
  )
}
