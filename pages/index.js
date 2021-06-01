import Container from '@/components/container';
import Carrousel from '@/components/carrousel';
import Layout from '@/components/layout';
import Header from '@/components/header';
import { getDataForHome } from '@/lib/api';
import Head from 'next/head';
import Store from '@/components/store';
import Swiper from '@/components/liteCarousel';

const initData = { banners: [], productos: [] }

export default function Index({ result, preview }) {
  return (
    <>
      <Layout preview={preview} contactData={result.datosDeContacto}>
        <Head>
          <title>Delirios Indumentaria</title>
        </Head>
        <Container>
          <Header />
          <Carrousel data={result.banners} />
          <Swiper categories={result.categorias}>
            {({ isFiltered, filteredProducts}) => {
              return (
                <Store products={isFiltered ? filteredProducts : result.productos}/>
              )
            }}
          </Swiper>
        </Container>
      </Layout>
      <div id="modalContainer" />
    </>
  )
}

export async function getServerSideProps({ preview = null }) {
  const result = (await getDataForHome()) || initData;
  return {
    props: { result, preview },
  }
}
