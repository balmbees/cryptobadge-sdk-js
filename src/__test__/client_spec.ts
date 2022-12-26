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

    describe("#getUserCertificates", () => {
      it("should work", async () => {
        const badge = await client.getUserCertificates({
          userId: "c224e1f4-1818-4b00-9f8f-f3a42f5244c0",
          count: 20,
        });
        expect(badge.data).to.be.deep.eq({
          certification: {
            edges: {
              node: {
                id: "Q2VydGlmaWNhdGU6MDAwMDAwMDAwMDAwMDAxMA==",
                resourceUrl:
                  "https://cryptobadge.app/certifications/0000000000000010",
                issuer: "lecle",
                imageUri: "https://dummyimage.com/600x600/000/fff",
                name: "Test Badge",
                description: "Description",
              },
            },
          },
        });
      });
    });
  });
});
