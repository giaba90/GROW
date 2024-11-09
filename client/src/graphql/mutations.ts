import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation CreateComment($postId: Int!, $content: String!, $author: String, $authorEmail: String) {
  createComment(
    input: {
    commentOn: $postId       # ID del post su cui aggiungere il commento
        content: $content        # Contenuto del commento
        author: $author          # Nome dell'autore
        authorEmail: $authorEmail # Email dell'autore
      }
  ) {
      comment {
        id                       # ID del commento creato
        content                  # Contenuto del commento
        author {
          node {
            name                # Nome dell'autore
        }
      }
        date                     # Data del commento
    }
  }
}
`;