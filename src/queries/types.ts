/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBadgeMintRequests
// ====================================================

export interface getBadgeMintRequests_badgeMintRequests_edges_node_badge {
  __typename: "Badge";
  id: string;
  /**
   * Background color of the badge
   */
  backgroundColor: string | null;
  /**
   * The animated version of certification image url
   */
  certificateAnimationUri: string | null;
  /**
   * The archetype of certification image url to be minted from the badge
   */
  certificateImageUri: string | null;
  /**
   * Whether to be able to be claimed
   */
  claimable: boolean | null;
  /**
   * Criteria of the badge: A narrative of what is needed to earn the badge.
   */
  criteria: string | null;
  /**
   * Description of the badge
   */
  description: string | null;
  /**
   * Issuer of the badge
   */
  issuer: string | null;
  /**
   * Metadata version
   */
  metadataVersion: number | null;
  /**
   * Badge Name
   */
  name: string | null;
  /**
   * Text color of the badge
   */
  textColor: string | null;
  /**
   * Whether to be able to be transferred
   */
  transferable: boolean | null;
  /**
   * Chain ID of Badge
   */
  chainId: number | null;
  /**
   * Contract of Badge
   */
  contract: string | null;
  /**
   * Metadata of Badge
   */
  metadataText: string | null;
  /**
   * resourceUrl of Badge
   */
  resourceUrl: string | null;
}

export interface getBadgeMintRequests_badgeMintRequests_edges_node {
  __typename: "BadgeMintRequest";
  id: string;
  status: BadgeMintRequestStatus;
  requestedAt: string;
  issuerId: string | null;
  transactionRequestId: string | null;
  winnerId: string;
  badge: getBadgeMintRequests_badgeMintRequests_edges_node_badge;
  winnerAddress: string;
}

export interface getBadgeMintRequests_badgeMintRequests_edges {
  __typename: "BadgeMintRequestEdge";
  /**
   * The item at the end of the edge.
   */
  node: getBadgeMintRequests_badgeMintRequests_edges_node;
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface getBadgeMintRequests_badgeMintRequests_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean | null;
}

export interface getBadgeMintRequests_badgeMintRequests {
  __typename: "BadgeMintRequestConnection";
  edges: getBadgeMintRequests_badgeMintRequests_edges[] | null;
  pageInfo: getBadgeMintRequests_badgeMintRequests_pageInfo;
  totalCount: number;
}

export interface getBadgeMintRequests {
  badgeMintRequests: getBadgeMintRequests_badgeMintRequests | null;
}

export interface getBadgeMintRequestsVariables {
  before?: string | null;
  first?: number | null;
  after?: string | null;
  last?: number | null;
  issuers: string[];
  status?: BadgeMintRequestStatus | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBadges
// ====================================================

export interface getBadges_badges_edges_node {
  __typename: "Badge";
  id: string;
  /**
   * Background color of the badge
   */
  backgroundColor: string | null;
  /**
   * The animated version of certification image url
   */
  certificateAnimationUri: string | null;
  /**
   * The archetype of certification image url to be minted from the badge
   */
  certificateImageUri: string | null;
  /**
   * Whether to be able to be claimed
   */
  claimable: boolean | null;
  /**
   * Criteria of the badge: A narrative of what is needed to earn the badge.
   */
  criteria: string | null;
  /**
   * Description of the badge
   */
  description: string | null;
  /**
   * Issuer of the badge
   */
  issuer: string | null;
  /**
   * Metadata version
   */
  metadataVersion: number | null;
  /**
   * Badge Name
   */
  name: string | null;
  /**
   * Property of badge
   */
  properties: any;
  /**
   * Tags of the badge
   */
  tags: string[] | null;
  /**
   * Text color of the badge
   */
  textColor: string | null;
  /**
   * Whether to be able to be transferred
   */
  transferable: boolean | null;
  /**
   * Chain ID of Badge
   */
  chainId: number | null;
  /**
   * Contract of Badge
   */
  contract: string | null;
  /**
   * Metadata of Badge
   */
  metadataText: string | null;
  /**
   * resourceUrl of Badge
   */
  resourceUrl: string | null;
}

export interface getBadges_badges_edges {
  __typename: "BadgeEdge";
  /**
   * The item at the end of the edge.
   */
  node: getBadges_badges_edges_node;
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface getBadges_badges_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean | null;
}

export interface getBadges_badges {
  __typename: "BadgeConnection";
  edges: getBadges_badges_edges[] | null;
  pageInfo: getBadges_badges_pageInfo;
  totalCount: number;
}

export interface getBadges {
  badges: getBadges_badges | null;
}

export interface getBadgesVariables {
  before?: string | null;
  first?: number | null;
  after?: string | null;
  last?: number | null;
  name?: string | null;
  issuer?: string | null;
  chainId?: number | null;
  claimable?: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCertificates
// ====================================================

export interface getCertificates_certificates_edges_node {
  __typename: "Certificate";
  id: string;
  /**
   * The animated version of certificate image url
   */
  animationUri: string | null;
  /**
   * Background color of the badge
   */
  backgroundColor: string | null;
  /**
   * Whether to be able to be claimed
   */
  claimable: boolean | null;
  /**
   * Criteria of the badge: A narrative of what is needed to earn the badge.
   */
  criteria: string | null;
  /**
   * Description of the certificate
   */
  description: string | null;
  /**
   * Evidence of the certificate
   */
  evidence: string | null;
  /**
   * The certificate image uri
   */
  imageUri: string | null;
  /**
   * Issuer of the badge
   */
  issuer: string | null;
  /**
   * Version metadata
   */
  metadataVersion: number | null;
  /**
   * Certificate Name
   */
  name: string | null;
  /**
   * Properties of certificate
   */
  properties: any;
  /**
   * Tags of the Certificate
   */
  tags: string[] | null;
  /**
   * Text color of the badge
   */
  textColor: string | null;
  /**
   * Winner of the certificate
   */
  winner: string | null;
  /**
   * State of the certificate
   */
  state: string | null;
  /**
   * ResourceUrl of certificate
   */
  resourceUrl: string | null;
  /**
   * Metadata of certificate
   */
  metadataText: string | null;
}

export interface getCertificates_certificates_edges {
  __typename: "CertificateEdge";
  /**
   * The item at the end of the edge.
   */
  node: getCertificates_certificates_edges_node;
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface getCertificates_certificates_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean | null;
}

export interface getCertificates_certificates {
  __typename: "CertificateConnection";
  edges: getCertificates_certificates_edges[] | null;
  pageInfo: getCertificates_certificates_pageInfo;
  totalCount: number;
}

export interface getCertificates {
  certificates: getCertificates_certificates | null;
}

export interface getCertificatesVariables {
  before?: string | null;
  after?: string | null;
  first?: number | null;
  last?: number | null;
  name?: string | null;
  issuer?: string | null;
  winner?: string | null;
  userId?: string | null;
  addresses?: string[] | null;
  issuers?: string[] | null;
  contracts?: string[] | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCertificatesTotalCount
// ====================================================

export interface getCertificatesTotalCount_certificates {
  __typename: "CertificateConnection";
  totalCount: number;
}

export interface getCertificatesTotalCount {
  certificates: getCertificatesTotalCount_certificates | null;
}

export interface getCertificatesTotalCountVariables {
  before?: string | null;
  after?: string | null;
  first?: number | null;
  last?: number | null;
  name?: string | null;
  issuer?: string | null;
  winner?: string | null;
  userId?: string | null;
  addresses?: string[] | null;
  issuers?: string[] | null;
  contracts?: string[] | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCertificatesWithBadges
// ====================================================

export interface getCertificatesWithBadges_certificates_edges_node_badge {
  __typename: "Badge";
  id: string;
  /**
   * Background color of the badge
   */
  backgroundColor: string | null;
  /**
   * The animated version of certification image url
   */
  certificateAnimationUri: string | null;
  /**
   * The archetype of certification image url to be minted from the badge
   */
  certificateImageUri: string | null;
  /**
   * Whether to be able to be claimed
   */
  claimable: boolean | null;
  /**
   * Criteria of the badge: A narrative of what is needed to earn the badge.
   */
  criteria: string | null;
  /**
   * Description of the badge
   */
  description: string | null;
  /**
   * Issuer of the badge
   */
  issuer: string | null;
  /**
   * Metadata version
   */
  metadataVersion: number | null;
  /**
   * Badge Name
   */
  name: string | null;
  /**
   * Property of badge
   */
  properties: any;
  /**
   * Tags of the badge
   */
  tags: string[] | null;
  /**
   * Text color of the badge
   */
  textColor: string | null;
  /**
   * Whether to be able to be transferred
   */
  transferable: boolean | null;
  /**
   * Chain ID of Badge
   */
  chainId: number | null;
  /**
   * Contract of Badge
   */
  contract: string | null;
  /**
   * Metadata of Badge
   */
  metadataText: string | null;
  /**
   * resourceUrl of Badge
   */
  resourceUrl: string | null;
}

export interface getCertificatesWithBadges_certificates_edges_node {
  __typename: "Certificate";
  id: string;
  /**
   * The animated version of certificate image url
   */
  animationUri: string | null;
  /**
   * Background color of the badge
   */
  backgroundColor: string | null;
  /**
   * Whether to be able to be claimed
   */
  claimable: boolean | null;
  /**
   * Criteria of the badge: A narrative of what is needed to earn the badge.
   */
  criteria: string | null;
  /**
   * Description of the certificate
   */
  description: string | null;
  /**
   * Evidence of the certificate
   */
  evidence: string | null;
  /**
   * The certificate image uri
   */
  imageUri: string | null;
  /**
   * Issuer of the badge
   */
  issuer: string | null;
  /**
   * Version metadata
   */
  metadataVersion: number | null;
  /**
   * Certificate Name
   */
  name: string | null;
  /**
   * Properties of certificate
   */
  properties: any;
  /**
   * Tags of the Certificate
   */
  tags: string[] | null;
  /**
   * Text color of the badge
   */
  textColor: string | null;
  /**
   * Winner of the certificate
   */
  winner: string | null;
  /**
   * State of the certificate
   */
  state: string | null;
  /**
   * ResourceUrl of certificate
   */
  resourceUrl: string | null;
  /**
   * Metadata of certificate
   */
  metadataText: string | null;
  badge: getCertificatesWithBadges_certificates_edges_node_badge | null;
}

export interface getCertificatesWithBadges_certificates_edges {
  __typename: "CertificateEdge";
  /**
   * The item at the end of the edge.
   */
  node: getCertificatesWithBadges_certificates_edges_node;
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface getCertificatesWithBadges_certificates_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean | null;
}

export interface getCertificatesWithBadges_certificates {
  __typename: "CertificateConnection";
  edges: getCertificatesWithBadges_certificates_edges[] | null;
  pageInfo: getCertificatesWithBadges_certificates_pageInfo;
  totalCount: number;
}

export interface getCertificatesWithBadges {
  certificates: getCertificatesWithBadges_certificates | null;
}

export interface getCertificatesWithBadgesVariables {
  before?: string | null;
  after?: string | null;
  first?: number | null;
  last?: number | null;
  name?: string | null;
  issuer?: string | null;
  winner?: string | null;
  userId?: string | null;
  addresses?: string[] | null;
  issuers?: string[] | null;
  contracts?: string[] | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCertificatesWithCommunities
// ====================================================

export interface getCertificatesWithCommunities_certificatesWithCommunities_edges_node {
  __typename: "Certificate";
  id: string;
  /**
   * The animated version of certificate image url
   */
  animationUri: string | null;
  /**
   * Background color of the badge
   */
  backgroundColor: string | null;
  /**
   * Whether to be able to be claimed
   */
  claimable: boolean | null;
  /**
   * ResourceUrl of certificate
   */
  resourceUrl: string | null;
  /**
   * Issuer of the badge
   */
  issuer: string | null;
  /**
   * The certificate image uri
   */
  imageUri: string | null;
  /**
   * Certificate Name
   */
  name: string | null;
  /**
   * Description of the certificate
   */
  description: string | null;
  /**
   * Winner of the certificate
   */
  winner: string | null;
  /**
   * Evidence of the certificate
   */
  evidence: string | null;
  /**
   * State of the certificate
   */
  state: string | null;
}

export interface getCertificatesWithCommunities_certificatesWithCommunities_edges {
  __typename: "CertificateEdge";
  /**
   * The item at the end of the edge.
   */
  node: getCertificatesWithCommunities_certificatesWithCommunities_edges_node;
}

export interface getCertificatesWithCommunities_certificatesWithCommunities_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface getCertificatesWithCommunities_certificatesWithCommunities {
  __typename: "CertificateConnection";
  totalCount: number;
  edges: getCertificatesWithCommunities_certificatesWithCommunities_edges[] | null;
  pageInfo: getCertificatesWithCommunities_certificatesWithCommunities_pageInfo;
}

export interface getCertificatesWithCommunities {
  certificatesWithCommunities: getCertificatesWithCommunities_certificatesWithCommunities | null;
}

export interface getCertificatesWithCommunitiesVariables {
  count: number;
  after?: string | null;
  issuers?: string[] | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCertificatesWithoutCommunities
// ====================================================

export interface getCertificatesWithoutCommunities_certificatesWithoutCommunities_edges_node {
  __typename: "Certificate";
  id: string;
  /**
   * The animated version of certificate image url
   */
  animationUri: string | null;
  /**
   * Background color of the badge
   */
  backgroundColor: string | null;
  /**
   * Whether to be able to be claimed
   */
  claimable: boolean | null;
  /**
   * ResourceUrl of certificate
   */
  resourceUrl: string | null;
  /**
   * Issuer of the badge
   */
  issuer: string | null;
  /**
   * The certificate image uri
   */
  imageUri: string | null;
  /**
   * Certificate Name
   */
  name: string | null;
  /**
   * Description of the certificate
   */
  description: string | null;
  /**
   * Winner of the certificate
   */
  winner: string | null;
  /**
   * Evidence of the certificate
   */
  evidence: string | null;
  /**
   * State of the certificate
   */
  state: string | null;
}

export interface getCertificatesWithoutCommunities_certificatesWithoutCommunities_edges {
  __typename: "CertificateEdge";
  /**
   * The item at the end of the edge.
   */
  node: getCertificatesWithoutCommunities_certificatesWithoutCommunities_edges_node;
}

export interface getCertificatesWithoutCommunities_certificatesWithoutCommunities_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface getCertificatesWithoutCommunities_certificatesWithoutCommunities {
  __typename: "CertificateConnection";
  totalCount: number;
  edges: getCertificatesWithoutCommunities_certificatesWithoutCommunities_edges[] | null;
  pageInfo: getCertificatesWithoutCommunities_certificatesWithoutCommunities_pageInfo;
}

export interface getCertificatesWithoutCommunities {
  certificatesWithoutCommunities: getCertificatesWithoutCommunities_certificatesWithoutCommunities | null;
}

export interface getCertificatesWithoutCommunitiesVariables {
  count: number;
  after?: string | null;
  contracts?: string[] | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserCertificates
// ====================================================

export interface getUserCertificates_certificates_edges_node {
  __typename: "Certificate";
  id: string;
  /**
   * ResourceUrl of certificate
   */
  resourceUrl: string | null;
  /**
   * Issuer of the badge
   */
  issuer: string | null;
  /**
   * The certificate image uri
   */
  imageUri: string | null;
  /**
   * Certificate Name
   */
  name: string | null;
  /**
   * Description of the certificate
   */
  description: string | null;
}

export interface getUserCertificates_certificates_edges {
  __typename: "CertificateEdge";
  /**
   * The item at the end of the edge.
   */
  node: getUserCertificates_certificates_edges_node;
}

export interface getUserCertificates_certificates_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface getUserCertificates_certificates {
  __typename: "CertificateConnection";
  totalCount: number;
  edges: getUserCertificates_certificates_edges[] | null;
  pageInfo: getUserCertificates_certificates_pageInfo;
}

export interface getUserCertificates {
  certificates: getUserCertificates_certificates | null;
}

export interface getUserCertificatesVariables {
  count: number;
  after?: string | null;
  userId: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum BadgeMintRequestStatus {
  DONE = "DONE",
  FAILED = "FAILED",
  MINTING = "MINTING",
  NEW = "NEW",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
