import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
mutation CreateComment($postId: Int!, $content: String!, $authorName: String!) {
  createComment(
    input: {
      commentOn: $postId      # ID del post a cui si desidera aggiungere il commento
      content: $content       # Contenuto del commento
      authorName: $authorName # Nome dell'autore del commento
    }
  ) {
    comment {
      id                      # ID del commento creato
      content                 # Contenuto del commento creato
      authorName              # Nome dell'autore del commento creato
    }
  }
}
`;