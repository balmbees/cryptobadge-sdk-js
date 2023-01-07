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

//==============================================================
// END Enums and Input Objects
//==============================================================
