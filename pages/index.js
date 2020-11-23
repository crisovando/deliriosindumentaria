import { useEffect, useState } from 'react';
import Container from '@/components/container'
import Carrousel from '@/components/carrousel'
import Layout from '@/components/layout'
import Header from '@/components/header';
import { getDataForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import Store from '@/components/store'

export default function Index() {
  const [result, setResult] = useState({ banners: [], productos: [] })
  useEffect(() => {
    getDataForHome()
    .then(res => setResult(res));
  }, [])
  return (
    <>
      <Layout preview={false}>
        <Head>
          <title>Delirios Indumentaria</title>
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

