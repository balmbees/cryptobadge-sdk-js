/* tslint:disable */
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
  /**
   * Determines the state of the certification.
   */
  state: CertificationState;
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
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBadge
// ====================================================

export interface getBadge_badge_Certification {
  __typename: "Certification";
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

export type getBadge_badge = getBadge_badge_Certification | getBadge_badge_Badge;

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
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCertification
// ====================================================

export interface getCertification_certification_Badge {
  __typename: "Badge";
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
  badge: getCertification_certification_Certification_badge;
}

export type getCertification_certification = getCertification_certification_Badge | getCertification_certification_Certification;

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

export interface CreateBadgeInput {
  name: string;
  backgroundColor: any;
  textColor: any;
  imageUrl: any;
  path: string;
  description: string;
  criteria: string;
  clientMutationId?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
