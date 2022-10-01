const {gql} = require('apollo-server-express');

require('graphql-tag');
require('graphql-anywhere');


const typeDefs = gql`
type panInfoSchema
{
    pan: String!
    nameOnCard:  String!
    verifiedAt: Int!
    verificationStatus: String!
    dobVerificationStatus: String!
    verificationId: String!
}
type emailInfoSchema
{
    emailId: String!
    maskedEmailId: String!
    verifiedAt: String!
    verificationMode: String!
    verificationStatus: String!
    verificationId: String!
}
type personalInfoSchema
{
    title: String!
    firstName: String!
    middleName: String!
    lastName: String!
    fullName:String!
    gender: String!
    dateOfBirth: String!
}

type mobileInfoSchema
{
    number: String!
    maskedNumber: String!
    countryCode: String!
    verifiedAt: Int!
    verificationStatus: String!
    dobVerificationStatus: String!
    verificationId: String!
    verificationMode:  String!
}
type sourcelobs
{
    sourceLOB:  String!
    sourceLOBCIN: String!
    migratedAt:  Int!
}
type emailPrefSchema
{
  state: String!
  subscriptionGroup: String!
}
type whatsappPrefSchema
{
  state: String!
}
type smsPrefSchema
{
  state: String!
}
type pnPrefSchema
{
  state: String!
}
type consentSchema
{
  consentCode: String!
  consentStatus: String!
  consentUpdatedAt: Int!
}
type communicationPrefsSchema
{
    emailPrefs: [ emailPrefSchema]
    whatsAppPrefs: [ whatsappPrefSchema]
    smsPrefs: [smsPrefSchema]
    pnPrefs: [pnPrefSchema]
}

type consentCustomerProfile
{
  oneAppUserId: String!
  consents: [consentSchema]
}

type communicationPrefsCustomerProfile
{
    oneAppUserId: String!
    communicationPrefs:  communicationPrefsSchema!
}

type BasicCustomerProfile
{
    oneAppUserId: String!
    panInfo: panInfoSchema!
    personalInfo: personalInfoSchema!
    emailInfo: emailInfoSchema!
    mobileInfo: mobileInfoSchema!
    piiLastUpdatedAt: Int!
    version:  String!
    status: String!
    createdAt: Int!
    updatedAt: Int!
    onboardingStage: String!
    sourceLOBs: [sourcelobs]
}
type customerProfile
{
  oneAppUserId: String!
  panInfo: panInfoSchema!
  personalInfo: personalInfoSchema!
  emailInfo: emailInfoSchema!
  mobileInfo: mobileInfoSchema!
  consents: [consentSchema]!
  piiLastUpdatedAt: Int!
  version:  String!
  status: String!
  statusUpdatedAt: Int
  createdAt: Int!
  updatedAt: Int!
  onboardingStage: String!
  lastLoggedInAt: Int!
  deviceId:String!
  deviceRefId: String!
  deviceToken: String!
  isPinSet: Boolean!
  communicationPrefs: communicationPrefsSchema!
}
type Query
  {
    oneAppUserIdQuery(id : String!): BasicCustomerProfile!
    panNumberQuery(pan : String!): BasicCustomerProfile!
    phoneNumberQuery(number : String!) : BasicCustomerProfile!
    emailIdQuery(emailId : String!) : BasicCustomerProfile!
  }

`;





module.exports = { typeDefs };
