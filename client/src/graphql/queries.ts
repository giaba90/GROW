import { gql } from '@apollo/client';

export const GET_POSTS_HP = gql`
  query GetPosts {
    posts {
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
          }
        }
      }
    }
  }
`;

export const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id, idType: DATABASE_ID) {
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
          name
          slug
        }
      }
      tags {
        nodes {
          name
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
  }
`;

// Define the Post type
export interface Post {
  postId: string;
  title: string;
  date: string;
  excerpt: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
  categories: {
    nodes: {
      slug: string;
    }[];
  };
}
