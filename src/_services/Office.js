import { gql } from '@apollo/client';

export const GET_OFFICE_BY_ID = gql`
  query($id:ID!){
    office(id:$id){
      id
      name
      email
      address
      phone{
        countryCode
        areaCode
        phoneNumber
      }
      
    }
  }
`
