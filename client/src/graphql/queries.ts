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

export const GET_POST_AND_ARCHIVED_POSTS = gql`
  query GetPostAndArchivedPosts($id: ID!, $slug: String!) {
  post(id: $id) {
    id
    title
    content
    categories {
      nodes {
        slug
        name
      }
    }
    # Altri campi per il post
  }
  posts(where: { categoryName: $slug }, first: 5) {
    nodes {
      id
      title
      excerpt
      slug
      # Altri campi per i post correlati
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
  }
`;


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
