import { expect } from "chai";
import * as moment from "moment";

import { CryptobadgeClient } from "../client";

const TEST_ENDPOINT = "https://api.cryptobadge.app/graphql";
const TEST_ACCESS_TOKEN = "e14iZBK0JxUAygKd";
const TEST_ADMIN_KEY = "sHj+2+1oAzUBCtkzXXJcgXUi0xTe6V6T/kx/MMna9Gs=";

describe(CryptobadgeClient.name, () => {
  describe("constructor", () => {
    it("should work without secret token", () => {
      const client = new CryptobadgeClient({
        url: TEST_ENDPOINT,
        accessToken: TEST_ACCESS_TOKEN,
        authorizationKey: TEST_ADMIN_KEY,
      });
      expect(client).to.be.instanceOf(CryptobadgeClient);
    });
  });

  describe("Query Methods", () => {
    let client: CryptobadgeClient;

    beforeEach(() => {
      client = new CryptobadgeClient({
        url: "https://api.cryptobadge.app/graphql",
        accessToken: TEST_ACCESS_TOKEN,
        authorizationKey: TEST_ADMIN_KEY,
      });
    });

    // describe.only("#createBadge", () => {
    //   it("should work", async () => {
    //     const badge = await client.createBadge({
    //       input: {
    //         name: "Vingle Test Badge Migration",
    //         backgroundColor: "#ffffff",
    //         textColor: "#000000",
    //         imageUrl: "https://media.vingle.net/images/ca_l/2tkiaqg3uj.jpg",
    //         path: "vingle-test-migration",
    //         description: "Vingle Test Migration",
    //         criteria: "TEST",
    //       },
    //     });

    //     console.log(JSON.stringify(badge.data!.createBadge!.badge));
    //     expect(badge.data!.createBadge!.badge!.name).to.be.eq("Vingle Test Badge Migration");
    //   });
    // });

    describe("#getBadge", () => {
      it("should work", async () => {
        const badge = await client.getBadge({ id: "QmFkZ2U6MDAwMDAwMDAwMDAwMzY5Mw==" });
        expect(badge.data).to.be.deep.eq({
          badge: {
            __typename: "Badge",
            id: "QmFkZ2U6MDAwMDAwMDAwMDAwMzY5Mw==",
            creatorName: "Vingle",
            description: "Vingle Test Migration",
            imageUrl: "https://media.vingle.net/images/ca_l/2tkiaqg3uj.jpg",
            name: "Vingle Test Badge Migration",
            resourceUrl: "https://test.cryptobadge.app/@Vingle/vingle-test-migration",
          }
        });
      });
    });

    describe.only("#createCertification", () => {
      it("should work", async () => {

        const client2 = new CryptobadgeClient({
          url: "https://api.cryptobadge.app/graphql",
          accessToken: TEST_ACCESS_TOKEN,
          authorizationKey: "DqTE605jexhWurOYaSclharbLaC4ON88",
        });

        try {
          console.log(JSON.stringify({
            badgeId: "QmFkZ2U6MDAwMDAwMDAwMDAwMDg1NA==",
            winnerName: "Hwantae",
            encryptedWinnerEmail: client2.encryptEmail("hwantae.kim@vingle.net"),
            issuedAt: moment.utc().format("YYYY-MM-DDTHH:mm:ss+00:00"),
            expiresAt: moment.utc().add(7, "days").format("YYYY-MM-DDTHH:mm:ss+00:00"),
            evidence: "Test Evidence",
          }));
          const certification = await client.createCertification({
          badgeId: "QmFkZ2U6MDAwMDAwMDAwMDAwMDg1NA==",
          winnerName: "Hwantae",
          encryptedWinnerEmail: client2.encryptEmail("hwantae.kim@vingle.net"),
          issuedAt: moment.utc().format("YYYY-MM-DDTHH:mm:ss+00:00"),
          expiresAt: moment.utc().add(7, "days").format("YYYY-MM-DDTHH:mm:ss+00:00"),
          evidence: "Test Evidence",
        });
          console.log(certification);
          console.log(certification.data);
          expect(certification.data!.createCertification!.certification!.winnerName).to.be.eq("Hwantae");
        } catch (e) {
          console.log(JSON.stringify(e));
        }
      });
    });

    describe("#getCertification", () => {
      it("should work", async () => {
        const badge = await client.getCertification({ id: "Q2VydGlmaWNhdGU6MDAwMDAwMDAwMDAwNDY4MA==" });
        expect(badge.data).to.be.deep.eq({
          certification: {
            __typename: "Certification",
            badge: {
              __typename: "Badge",
              creatorName: "Vingle",
              description: "Vingle Test Migration",
              id: "QmFkZ2U6MDAwMDAwMDAwMDAwMzY5Mw==",
              imageUrl: "https://media.vingle.net/images/ca_l/2tkiaqg3uj.jpg",
              name: "Vingle Test Badge Migration",
              resourceUrl: "https://test.cryptobadge.app/@Vingle/vingle-test-migration",
            },
            id: "Q2VydGlmaWNhdGU6MDAwMDAwMDAwMDAwNDY4MA==",
            resourceUrl: "https://cryptobadge.app/certifications/0000000000000010",
            state: "CERTIFIED",
          }
        });
      });
    });

    describe("#getUserCertifications", () => {
      it("should work", async () => {
        const client2 = new CryptobadgeClient({
          url: TEST_ENDPOINT,
          accessToken: TEST_ACCESS_TOKEN,
          authorizationKey: "DqTE605jexhggerOyfSclharbLaC4ON8",
        });
        const badge = await client.getUserCertifications({
          count: 10,
          encryptedEmail: client2.encryptEmail("hwantae.kim@vingle.net")
         });

        console.log(badge.data);
        expect(badge.data.certifications!.edges![0]!.node!.state).to.be.equal("CERTIFIED");

      });
    });
  });
});
