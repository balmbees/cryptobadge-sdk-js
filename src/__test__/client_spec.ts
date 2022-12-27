import { expect } from "chai";

import { CryptobadgeClient } from "../client";

describe(CryptobadgeClient.name, () => {
  describe("constructor", () => {
    it("should work without secret token", () => {
      const client = new CryptobadgeClient({
        url: "https://api.cryptobadge.xyz/api",
        accessToken: "58qxzRGlNre0SgV76LRGNZ4FjO1T",
        authorizationKey: "lCY/MgfbG/xaghiJHuMtW8cypgSVBHfZlyMOFwlBmzo=",
      });
      expect(client).to.be.instanceOf(CryptobadgeClient);
    });
  });

  describe("Query Methods", () => {
    let client: CryptobadgeClient;

    beforeEach(() => {
      client = new CryptobadgeClient({
        url: "https://api.cryptobadge.xyz/api",
        accessToken: "58qxzRGlNre0SgV76LRGNZ4FjO1T",
        authorizationKey: "lCY/MgfbG/xaghiJHuMtW8cypgSVBHfZlyMOFwlBmzo=",
      });
    });

    describe("#getUserCertificates", () => {
      it("should work", async () => {
        const badge = await client.getUserCertificates({
          userId: "VXNlcjpjMjI0ZTFmNC0xODE4LTRiMDAtOWY4Zi1mM2E0MmY1MjQ0YzA",
          count: 20,
        });
        expect(badge.data).to.be.deep.eq({
          certificates: {
            totalCount: 2,
            edges: [
              {
                node: {
                  id: "0000000000028348",
                  resourceUrl:
                    "https://cryptobadge.xyz/@Vake/periodclub/0000000000028348",
                  issuer: "4392c02f-b437-4e8a-98ea-a60e449aefe9",
                  imageUri: "https://ca.group-edge.net/i/vake-badge-periodclub",
                  name: null,
                  description: null,
                },
              },
              {
                node: {
                  id: "0000000000011386",
                  resourceUrl:
                    "https://cryptobadge.xyz/@CryptoBadge/Terran/0000000000011386",
                  issuer: "CryptoBadge",
                  imageUri:
                    "https://s3-us-west-2.amazonaws.com/crypto-badge-static-prod/assets/badge-imgs/Terran_1000.png",
                  name: null,
                  description:
                    "Terran Badge is the symbol of citizenship in the CryptoBadge Network. A Citizenship Number is automatically granted based on order of registration. This badge proves that the winner is a human who has a CryptoBadge account.",
                },
              },
            ],
            pageInfo: {
              hasNextPage: false,
              endCursor: "YXJyYXljb25uZWN0aW9uOjE=",
            },
          },
        });
      });
    });
  });
});
