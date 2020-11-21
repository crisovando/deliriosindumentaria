import Container from '@/components/container'
import Carrousel from '@/components/carrousel'
import Layout from '@/components/layout'
import Header from '@/components/header';
import { getDataForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import Store from '@/components/store'

export default function Index({ result, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Tienda {CMS_NAME}</title>
        </Head>
        <Container>
          <Header />
          <Carrousel data={result.banners} />
          <Store products={result.productos} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const result = (await getDataForHome(preview))
  console.log('result', result);
  return {
    props: { result, preview },
  }
}
