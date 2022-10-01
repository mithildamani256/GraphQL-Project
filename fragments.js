const {gql} = require('apollo-server-express');


const CORE_COMMENT_FIELDS = gql`

fragment CommentsFragment on BasicCustomerProfile {
  personalInfo{
    lastName
  }
}

`;

module.exports = {CORE_COMMENT_FIELDS};