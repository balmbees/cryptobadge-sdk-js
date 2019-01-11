/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getIssuedBadges
// ====================================================

export interface getIssuedBadges_me_badges_edges_node {
  __typename: "Badge";
  id: string;
  /**
   * The name of the badge
   */
  name: string;
  /**
   * A CSS Color Module Level 3 compliant color unit string for the background color of the badge
   */
  backgroundColor: string;
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

export interface getIssuedBadges_me_badges_edges {
  __typename: "BadgeEdge";
  cursor: string | null;
  node: getIssuedBadges_me_badges_edges_node | null;
}

export interface getIssuedBadges_me_badges_pageInfo {
  __typename: "PageInfo";
  hasPreviousPage: boolean;
}

export interface getIssuedBadges_me_badges {
  __typename: "BadgeConnection";
  edges: (getIssuedBadges_me_badges_edges | null)[];
  pageInfo: getIssuedBadges_me_badges_pageInfo;
}

export interface getIssuedBadges_me {
  __typename: "User";
  /**
   * A list of badges created by the user
   */
  badges: getIssuedBadges_me_badges;
}

export interface getIssuedBadges {
  /**
   * The currently authenticated user
   */
  me: getIssuedBadges_me | null;
}
