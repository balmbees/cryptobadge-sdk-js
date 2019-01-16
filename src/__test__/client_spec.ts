import { expect } from "chai";

import { CryptobadgeClient } from "../client";

describe(CryptobadgeClient.name, () => {
  describe("constructor", () => {
    it("should work without secret token", () => {
      const client = new CryptobadgeClient({
        url: "https://api.sandbox.cryptobadge.app/graphql",
        accessToken: "e14iZBK0JxUAygKd",
      });
      expect(client).to.be.instanceOf(CryptobadgeClient);
    });
  });

  describe("#getBadge", () => {
    it("should work", async () => {
      const client = new CryptobadgeClient({
        url: "https://api.sandbox.cryptobadge.app/graphql",
        accessToken: "e14iZBK0JxUAygKd",
      });

      const badge = await client.getBadge({ id: "QmFkZ2U6MDAwMDAwMDAwMDAwMDAyNw==" });
      expect(badge.data).to.be.deep.eq({
        badge: {
          __typename: "Badge",
          id: "QmFkZ2U6MDAwMDAwMDAwMDAwMDAyNw==",
          imageUrl: "https://media.vingle.net/images/ca_l/2tkiaqg3uj.jpg",
          name: "Vingle Test Badge",
          resourceUrl: "https://cryptobadge.app/badges/vingle-test",
        }
      });
    });
  });
});
