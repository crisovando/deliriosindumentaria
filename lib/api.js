async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON) {
    posts(where: $where) {
      slug
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  );
  return data?.posts[0];
}

export async function getAllPostsWithSlug() {
  const data = fetchAPI(`
    {
      posts {
        slug
      }
    }
  `);
  return data?.allPosts;
}

export async function getDataForHome(preview) {
  const data = await fetchAPI(
    `
    query Banner{
      banners {
        name
        foto {
          id
          name 
          url
          formats
        }
      }
      productos {
        id
        nombre
        descripcion
        fotos {
          name
          formats
        }
        precio
        genero
        categoria {
          id
          nombre
        }
      }
      categorias {
        id
        nombre
        thumb {
          formats
          url
        }
      }
      datosDeContacto {
        Calle
        Localidad
        Partido
        Email
        Telefono
      }
    }
  `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: 'published' }),
        },
      },
    }
  );
  return data;
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON, $where_ne: JSON) {
    posts(where: $where) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }

    morePosts: posts(sort: "date:desc", limit: 2, where: $where_ne) {
      title
      slug
      excerpt
      date
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
  `,
    {
      preview,
      variables: {
        where: {
          slug,
          ...(preview ? {} : { status: 'published' }),
        },
        where_ne: {
          ...(preview ? {} : { status: 'published' }),
          slug_ne: slug,
        },
      },
    }
  );
  return data;
}

export async function getProductsByCategory(category) {
  const data = await fetchAPI(
    `query ProductsByCategory($where: JSON) {
      productos(where: $where) {
        id
        nombre
        descripcion
        fotos {
          name
          formats
        }
        precio
        genero
        categoria {
          id
          nombre
        }
      }
    }
  `,
    {
      variables: {
        where: {
          categoria: {
            nombre: category
          },
        },
      },
    }
  );
  return data;
}
