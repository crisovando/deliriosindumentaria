import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
          <Main />
          <NextScript />
        </body>
        <script src="https://kit.fontawesome.com/1e268974cb.js" crossOrigin="anonymous"></script>
      </Html>
    )
  }
}
