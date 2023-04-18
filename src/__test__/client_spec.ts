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
});
