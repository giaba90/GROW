import { gql } from '@apollo/client';

export const GET_POSTS_HP = gql`
  query GetPosts {
  posts(first: 6) {
    nodes {
      postId
      title
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          slug
          termTaxonomyId
          name
        }
      }
    }
  }
  }
`;

export const GET_POST = gql`
query GetPost($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
    id                 # ID globale del post (non specifico del database)
    postId             # ID specifico del post nel database
    title              # Titolo del post
    date               # Data di pubblicazione del post
    content            # Contenuto completo del post
    featuredImage {    # Immagine in evidenza del post, se presente
      node {
        sourceUrl      # URL dell'immagine in evidenza
      }
    }
    author {           # Dettagli dell'autore del post
      node {
        name           # Nome dell'autore
      }
    }
    categories {       # Categorie associate al post
      nodes {
        categoryId     # ID della categoria nel database
        slug           # Slug della categoria
        name           # Nome della categoria
      }
    }
    tags {             # Tag associati al post
      nodes {
        name           # Nome di ciascun tag
      }
    }
  }
}
`;

export const GET_PAGE = gql`
query GetPageBySlug($slug: String!) {
  pageBy(uri: $slug) {
    id
    title
    content
  }
}`;

export const GET_RELATED_POSTS = gql`
query GetArchivedPosts($categoryId: Int) {
  # Ottieni i post filtrati in base all'ID della categoria
  posts(where: { categoryId: $categoryId }) {
    nodes {
      postId             # ID univoco del post nel database
      title              # Titolo del post
      featuredImage {    # Immagine in evidenza associata al post, se presente
        node {
          sourceUrl      # URL dell'immagine in evidenza
        }
      }
    }
  }
}
`;
export const GET_ARCHIVED_POSTS = gql`
 query GetArchivedPosts($slug: String) {
  posts(where: { categoryName: $slug }) {
      nodes {
      postId
      title
        featuredImage {
          node {
          sourceUrl
        }
      }
    }
  }
}`;

export const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    categories {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;


export const GET_MENU = gql`
  query GetMenu {
    menu(id: "menu-principale", idType: SLUG) {
      menuItems {
        edges {
          node {
            id
            label
            uri
          }
        }
      }
    }
  }
`;

export const GET_COMMENT = gql`query GetPostComments($postId: ID!) {
  post(id: $postId, idType: DATABASE_ID) {
    comments {
      nodes {
        id
        content
        date
        author {
          node {
            name
          }
        }
      }
    }
  }
}
`;