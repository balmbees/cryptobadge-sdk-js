/* tslint:disable */
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
}

export interface getUserCertifications_certifications_edges_node {
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
  badge: getUserCertifications_certifications_edges_node_badge;
}

export interface getUserCertifications_certifications_edges {
  __typename: "CertificationEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: string;
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
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
}

export interface getUserCertifications_certifications {
  __typename: "CertificationConnection";
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
  count?: number | null;
  after?: string | null;
  encryptedEmail: string;
}

/* tslint:disable */
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
   * A cursor for use in pagination
   */
  cursor: string;
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
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
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
  count?: number | null;
  after?: string | null;
  encryptedEmails: string[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum CertificationState {
  CERTIFIED = "CERTIFIED",
  EXPIRED = "EXPIRED",
  REVOKED = "REVOKED",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
