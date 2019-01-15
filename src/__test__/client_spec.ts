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
});
