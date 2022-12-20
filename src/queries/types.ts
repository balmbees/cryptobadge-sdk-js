/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createBadge
// ====================================================

export interface createBadge_createBadge_badge {
  __typename: "Badge";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of the badge
   */
  name: string;
  /**
   * A RGB hexadecimal notation for the background color of the badge
   */
  backgroundColor: any;
  /**
   * A RGB hexadecimal notation for the text color of the badge
   */
  textColor: any;
  /**
   * A URI pointing to the badge's image.
   */
  imageUrl: any;
  /**
   * The Http URL for the badge.
   */
  resourceUrl: any;
  /**
   * The path for the badge.
   */
  path: string;
  /**
   * The badge's description.
   */
  description: string;
  /**
   * The badge's criteria to get certified.
   */
  criteria: string;
}

export interface createBadge_createBadge {
  __typename: "CreateBadgePayload";
  badge: createBadge_createBadge_badge | null;
}

export interface createBadge {
  createBadge: createBadge_createBadge | null;
}

export interface createBadgeVariables {
  input: CreateBadgeInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createCertification
// ====================================================

export interface createCertification_createCertification_certification_badge {
  __typename: "Badge";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of the badge
   */
  name: string;
}

export interface createCertification_createCertification_certification {
  __typename: "Certification";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The winner's name of the certification
   */
  winnerName: string;
  /**
   * Determines the state of the certification.
   */
  state: CertificationState;
  badge: createCertification_createCertification_certification_badge;
  /**
   * When the certification was issued.
   */
  issuedAt: any;
  /**
   * When the certification will be expired.
   */
  expiresAt: any | null;
  /**
   * The evidence of certification
   */
  evidence: string;
}

export interface createCertification_createCertification {
  __typename: "CreateCertificationPayload";
  certification: createCertification_createCertification_certification | null;
}

export interface createCertification {
  createCertification: createCertification_createCertification | null;
}

export interface createCertificationVariables {
  badgeId: string;
  winnerName: string;
  encryptedWinnerEmail: string;
  issuedAt?: any | null;
  expiresAt?: any | null;
  evidence: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBadge
// ====================================================

export interface getBadge_badge_User {
  __typename: "User" | "Certification" | "Issuer";
}

export interface getBadge_badge_Badge {
  __typename: "Badge";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of the badge
   */
  name: string;
  /**
   * A URI pointing to the badge's image.
   */
  imageUrl: any;
  /**
   * The badge's description.
   */
  description: string;
  /**
   * The Http URL for the badge.
   */
  resourceUrl: any;
  /**
   * The creator name of the badge
   */
  creatorName: string;
}

export type getBadge_badge = getBadge_badge_User | getBadge_badge_Badge;

export interface getBadge {
  /**
   * Fetches an object given its ID
   */
  badge: getBadge_badge | null;
}

export interface getBadgeVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBadgeByIssuerAndPath
// ====================================================

export interface getBadgeByIssuerAndPath_badge {
  __typename: "Badge";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of the badge
   */
  name: string;
  /**
   * The path for the badge.
   */
  path: string;
  /**
   * A URI pointing to the badge's image.
   */
  imageUrl: any;
  /**
   * The badge's description.
   */
  description: string;
  /**
   * The badge's criteria to get certified.
   */
  criteria: string;
  /**
   * A RGB hexadecimal notation for the background color of the badge
   */
  backgroundColor: any;
  /**
   * A RGB hexadecimal notation for the text color of the badge
   */
  textColor: any;
  /**
   * The status of the latest transaction
   */
  transactionStatus: TransactionStatus;
}

export interface getBadgeByIssuerAndPath {
  /**
   * Find a given badge by the badge issuer and badge path
   */
  badge: getBadgeByIssuerAndPath_badge | null;
}

export interface getBadgeByIssuerAndPathVariables {
  issuer: string;
  path: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBadges
// ====================================================

export interface getBadges_badges_edges_node_issuer {
  __typename: "Issuer";
  /**
   * The ID of an object
   */
  id: string;
}

export interface getBadges_badges_edges_node {
  __typename: "Badge";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of the badge
   */
  name: string;
  /**
   * The badge's description.
   */
  description: string;
  /**
   * A RGB hexadecimal notation for the background color of the badge
   */
  backgroundColor: any;
  /**
   * A RGB hexadecimal notation for the text color of the badge
   */
  textColor: any;
  /**
   * A URI pointing to the badge's image.
   */
  imageUrl: any;
  /**
   * The path for the badge.
   */
  path: string;
  /**
   * The badge's criteria to get certified.
   */
  criteria: string;
  issuer: getBadges_badges_edges_node_issuer;
  /**
   * The creator name of the badge
   */
  creatorName: string;
}

export interface getBadges_badges_edges {
  __typename: "BadgeEdge";
  /**
   * The item at the end of the edge
   */
  node: getBadges_badges_edges_node | null;
}

export interface getBadges_badges_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface getBadges_badges {
  __typename: "BadgeConnection";
  /**
   * A list of edges.
   */
  edges: (getBadges_badges_edges | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: getBadges_badges_pageInfo;
}

export interface getBadges {
  /**
   * Find badges of a given community account
   */
  badges: getBadges_badges | null;
}

export interface getBadgesVariables {
  count: number;
  after?: string | null;
  communityAccount: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCertification
// ====================================================

export interface getCertification_certification_User {
  __typename: "User" | "Badge" | "Issuer";
}

export interface getCertification_certification_Certification_badge {
  __typename: "Badge";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of the badge
   */
  name: string;
  /**
   * A URI pointing to the badge's image.
   */
  imageUrl: any;
  /**
   * The badge's description.
   */
  description: string;
  /**
   * The Http URL for the badge.
   */
  resourceUrl: any;
  /**
   * The creator name of the badge
   */
  creatorName: string;
}

export interface getCertification_certification_Certification {
  __typename: "Certification";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The Http URL for the certification.
   */
  resourceUrl: any;
  /**
   * Determines the state of the certification.
   */
  state: CertificationState;
  badge: getCertification_certification_Certification_badge;
}

export type getCertification_certification =
  | getCertification_certification_User
  | getCertification_certification_Certification;

export interface getCertification {
  /**
   * Fetches an object given its ID
   */
  certification: getCertification_certification | null;
}

export interface getCertificationVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: getImageUploadUrl
// ====================================================

export interface getImageUploadUrl_signBadgeImageUploadUrl {
  __typename: "SignBadgeImageUploadUrlPayload";
  /**
   * Signed S3 url to upload badge image
   */
  url: any | null;
}

export interface getImageUploadUrl {
  signBadgeImageUploadUrl: getImageUploadUrl_signBadgeImageUploadUrl | null;
}

export interface getImageUploadUrlVariables {
  input: SignBadgeImageUploadUrlInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserCertifications
// ====================================================

export interface getUserCertifications_certifications_edges_node_badge {
  __typename: "Badge";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of the badge
   */
  name: string;
  /**
   * A URI pointing to the badge's image.
   */
  imageUrl: any;
  /**
   * The badge's description.
   */
  description: string;
  /**
   * The creator name of the badge
   */
  creatorName: string;
}

export interface getUserCertifications_certifications_edges_node {
  __typename: "Certification";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The Http URL for the certification.
   */
  resourceUrl: any;
  /**
   * Determines the state of the certification.
   */
  state: CertificationState;
  badge: getUserCertifications_certifications_edges_node_badge;
}

export interface getUserCertifications_certifications_edges {
  __typename: "CertificationEdge";
  /**
   * The item at the end of the edge
   */
  node: getUserCertifications_certifications_edges_node | null;
}

export interface getUserCertifications_certifications_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface getUserCertifications_certifications {
  __typename: "CertificationConnection";
  /**
   * The total number of items in the connection
   */
  totalCount: number;
  /**
   * A list of edges.
   */
  edges: (getUserCertifications_certifications_edges | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: getUserCertifications_certifications_pageInfo;
}

export interface getUserCertifications {
  /**
   * Certifications of the given email holders
   */
  certifications: getUserCertifications_certifications | null;
}

export interface getUserCertificationsVariables {
  count: number;
  after?: string | null;
  encryptedEmail: string;
}

export interface getUserCertificationsVariablesV2 {
  count: number;
  after?: string | null;
  userId: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUsersCertifications
// ====================================================

export interface getUsersCertifications_certifications_edges_node_badge {
  __typename: "Badge";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of the badge
   */
  name: string;
}

export interface getUsersCertifications_certifications_edges_node {
  __typename: "Certification";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * Determines the state of the certification.
   */
  state: CertificationState;
  /**
   * The winner's name of the certification
   */
  winnerName: string;
  badge: getUsersCertifications_certifications_edges_node_badge;
}

export interface getUsersCertifications_certifications_edges {
  __typename: "CertificationEdge";
  /**
   * The item at the end of the edge
   */
  node: getUsersCertifications_certifications_edges_node | null;
}

export interface getUsersCertifications_certifications_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface getUsersCertifications_certifications {
  __typename: "CertificationConnection";
  /**
   * A list of edges.
   */
  edges: (getUsersCertifications_certifications_edges | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: getUsersCertifications_certifications_pageInfo;
}

export interface getUsersCertifications {
  /**
   * Certifications of the given email holders
   */
  certifications: getUsersCertifications_certifications | null;
}

export interface getUsersCertificationsVariables {
  count: number;
  after?: string | null;
  encryptedEmails: string[];
}

export interface getUsersCertificationsVariablesV2 {
  count: number;
  after?: string | null;
  userIds: string[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: revokeCertification
// ====================================================

export interface revokeCertification_revokeCertification_certification {
  __typename: "Certification";
  /**
   * The ID of an object
   */
  id: string;
}

export interface revokeCertification_revokeCertification {
  __typename: "RevokeCertificationPayload";
  certification: revokeCertification_revokeCertification_certification | null;
}

export interface revokeCertification {
  revokeCertification: revokeCertification_revokeCertification | null;
}

export interface revokeCertificationVariables {
  certificationId: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum CertificationState {
  CERTIFIED = "CERTIFIED",
  EXPIRED = "EXPIRED",
  REVOKED = "REVOKED",
}

/**
 * A status of objects available on the smart contract
 */
export enum TransactionStatus {
  APPROVING = "APPROVING",
  CONFIRMED = "CONFIRMED",
  CONFIRMING = "CONFIRMING",
}

export interface CreateBadgeInput {
  name: string;
  backgroundColor: any;
  textColor: any;
  imageUrl: any;
  revokedImageUrl?: any | null;
  expiredImageUrl?: any | null;
  path: string;
  description: string;
  criteria: string;
  tagNames?: (string | null)[] | null;
  communityAccount?: string | null;
  ttl?: number | null;
  clientMutationId?: string | null;
}

export interface SignBadgeImageUploadUrlInput {
  fileName: string;
  contentType: string;
  clientMutationId?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
