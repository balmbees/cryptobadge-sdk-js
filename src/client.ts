import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import * as Crypto from "crypto";
import fetch from "node-fetch";

import { Queries } from "./queries";

export class CryptobadgeClient extends Queries<NormalizedCacheObject> {
  private apolloClient: ApolloClient<NormalizedCacheObject>;

  private url: string;
  private accessToken: string;
  private secretKey: string;

  constructor(options: {
    url?: string,
    accessToken?: string,
    secretKey?: string,
  } = {}) {
    super();

    this.url = options.url || process.env.CRYPTOBADGE_API_URL || "https://api.cryptobadge.app/graphql";
    this.accessToken = (() => {
      const accessToken = options.accessToken || process.env.CRYPTOBADGE_ACCESS_TOKEN;
      if (!accessToken) {
        throw new Error("CRYPTOBADGE_ACCESS_TOKEN is required");
      }
      return accessToken;
    })();
    this.secretKey = (() => {
      const secretKey = options.secretKey || process.env.CRYPTOBADGE_SECRET_KEY;
      if (!secretKey) {
        throw new Error("CRYPTOBADGE_SECRET_KEY is required");
      }
      return secretKey;
    })();

    const httpLink = createHttpLink({
      fetch: fetch as any,
      headers: { "open-api-access-token": this.accessToken },
      uri: this.url,
    });

    this.apolloClient = new ApolloClient({
      cache: new InMemoryCache(),
      link: httpLink,
    });
  }

  get queryClient() {
    return this.apolloClient;
  }

  public encryptEmail(email: string) {
    const cipher = Crypto.createCipheriv("aes-256-cbc", this.secretKey, Buffer.alloc(16));
    const encryptedMsg = cipher.update(email, "utf8", "base64") + cipher.final("base64");
    return encryptedMsg.toString();
  }
}
