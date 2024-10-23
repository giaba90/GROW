import { gql } from '@apollo/client';

// GraphQL query to get posts
export const GET_POSTS = gql`
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
