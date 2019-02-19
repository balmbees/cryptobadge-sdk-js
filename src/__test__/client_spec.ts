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

  describe("Query Methods", () => {
    let client: CryptobadgeClient;

    beforeEach(() => {
      client = new CryptobadgeClient({
        url: "https://api.sandbox.cryptobadge.app/graphql",
        accessToken: "e14iZBK0JxUAygKd",
      });
    });

    describe("#getBadge", () => {
      it("should work", async () => {
        const badge = await client.getBadge({ id: "QmFkZ2U6MDAwMDAwMDAwMDAwMDAyNw==" });
        expect(badge.data).to.be.deep.eq({
          badge: {
            __typename: "Badge",
            id: "QmFkZ2U6MDAwMDAwMDAwMDAwMDAyNw==",
            creatorName: "Vingle",
            description: "Vingle Test Badge",
            imageUrl: "https://media.vingle.net/images/ca_l/2tkiaqg3uj.jpg",
            name: "Vingle Test Badge",
            resourceUrl: "https://cryptobadge.app/badges/vingle-test",
          }
        });
      });
    });

    describe("#getCertification", () => {
      it("should work", async () => {
        const badge = await client.getCertification({ id: "Q2VydGlmaWNhdGU6MDAwMDAwMDAwMDAwMDAxMA==" });
        expect(badge.data).to.be.deep.eq({
          certification: {
            __typename: "Certification",
            badge: {
              __typename: "Badge",
              creatorName: "lecle",
              description: "Description",
              id: "QmFkZ2U6MDAwMDAwMDAwMDAwMDAyOA==",
              imageUrl: "https://dummyimage.com/600x600/000/fff",
              resourceUrl: "https://cryptobadge.app/badges/tw3q1201-3a01-412a-90fa-w256e9b2fdq7black",
              name: "Test Badge",
            },
            id: "Q2VydGlmaWNhdGU6MDAwMDAwMDAwMDAwMDAxMA==",
            resourceUrl: "https://cryptobadge.app/certifications/0000000000000010",
            state: "CERTIFIED",
          }
        });
      });
    });
  });
});
