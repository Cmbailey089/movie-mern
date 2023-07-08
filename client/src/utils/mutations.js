import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
    }
  }
}
`;

export const SAVE_BOOK = gql`
mutation saveBook($bookdata: BookInput) {
    saveBook(data: $bookdata) {
        _id
        username
        email
        saveBooks {
            bookId
            authors
            image
            description
            title
            link
        }
    }
}`;

export const REMOVE_BOOK = gql`
mutation deleteBook($bookId: ID!) {
    deleteBook (bookId: $bookId) {
        _id
        username
        email
        savedBooks {
            bookId
            authors
            image
            title
            description
            link
        }
    }
}`;