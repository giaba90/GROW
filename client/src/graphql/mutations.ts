import { gql } from '@apollo/client';


export const CREATE_COMMENT = gql`
mutation CreateComment($postId: ID!, $content: String!, $author: String, $authorEmail: String) {
  createComment(
    input: {
      commentOn: $postId      # ID del post a cui si desidera aggiungere il commento
      content: $content       # Contenuto del commento
      author: $author         # Nome dell'autore del commento (opzionale)
      authorEmail: $authorEmail  # Email dell'autore del commento (opzionale)
    }
  ) {
    comment {
      id                      # ID del commento creato
      content                 # Contenuto del commento creato
      author {
        node {
          name               # Nome dell'autore del commento
        }
      }
      date                    # Data in cui il commento è stato creato
    }
  }
}
`;