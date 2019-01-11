/* tslint:disable */
// This file was automatically generated and should not be edited.

import { CertificationState } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getUserCertifications
// ====================================================

export interface getUserCertifications_certifications_edges_node_badge {
  __typename: "Badge";
  id: string;
  /**
   * The name of the badge
   */
  name: string;
}

export interface getUserCertifications_certifications_edges_node {
  __typename: "Certification";
  id: string;
  /**
   * Determines the state of the certification.
   */
  state: CertificationState;
  /**
   * The winner's name of the certification
   */
  winnerName: string;
  /**
   * The badge of the certification
   */
  badge: getUserCertifications_certifications_edges_node_badge;
}

export interface getUserCertifications_certifications_edges {
  __typename: "CertificationEdge";
  cursor: string | null;
  node: getUserCertifications_certifications_edges_node | null;
}

export interface getUserCertifications_certifications_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface getUserCertifications_certifications {
  __typename: "CertificationConnection";
  edges: (getUserCertifications_certifications_edges | null)[];
  pageInfo: getUserCertifications_certifications_pageInfo;
}

export interface getUserCertifications {
  /**
   * Certifications of the given email holders
   */
  certifications: getUserCertifications_certifications;
}

export interface getUserCertificationsVariables {
  count?: number | null;
  encryptedEmail: string;
}
