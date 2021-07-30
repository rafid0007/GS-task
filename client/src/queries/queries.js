import {gql} from "@apollo/client";

const STUDENTS = gql`
  query GetStudents {
    students {
      id
      name
      email
      phone
      dateOfBirth
      subjects{
        name
       }
    }
  }
`;

export {STUDENTS}