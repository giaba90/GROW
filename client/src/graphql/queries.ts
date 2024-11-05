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
query GetPostAndArchivedPosts($id: ID!, $idType: PostIdType!, $categoryId: Int!) {
  post(id: $id, idType: $idType) {
    id
    postId
    title
    date
    content
    featuredImage {
      node {
        sourceUrl
      }
    }
    author {
      node {
        name
      }
    }
    categories {
      nodes {
        categoryId
        slug
        name
      }
    }
    tags {
      nodes {
        name
      }
    }
  }
  posts(where: { categoryId: $categoryId }, first: 3) {
    nodes {
      id
      postId
      title
      excerpt
      slug
      featuredImage {
        node {
          sourceUrl
        }
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
