import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import * as Crypto from "crypto";
// node-fetch's polyfill
import "whatwg-fetch";

import fetch from "node-fetch";

import { Queries } from "./queries";

export class CryptobadgeClient extends Queries<NormalizedCacheObject> {
  private apolloClient: ApolloClient<NormalizedCacheObject>;

  private url: string;
  private accessToken: string;
  private authorizationKey: string | null;

  constructor(
    options: {
      url?: string;
      accessToken?: string;
      authorizationKey?: string;
    } = {},
  ) {
    super();

    this.url =
      options.url ||
      process.env.CRYPTOBADGE_API_URL ||
      "https://api.cryptobadge.app/graphql";
    this.accessToken = (() => {
      const accessToken =
        options.accessToken || process.env.CRYPTOBADGE_ACCESS_TOKEN;
      if (!accessToken) {
        throw new Error("CRYPTOBADGE_ACCESS_TOKEN is required");
      }
      return accessToken;
    })();
    this.authorizationKey =
      options.authorizationKey ||
      process.env.CRYPTOBADGE_AUTHORIZATION_KEY ||
      null;

    const headers: { [key: string]: string } = {
      "X-CryptoBadge-Access-Token": this.accessToken,
    };
    if (this.authorizationKey) {
      headers["X-CryptoBadge-Authorization"] = this.authorizationKey;
    }

    const httpLink = createHttpLink({
      fetch: fetch as any,
      headers,
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
    if (this.authorizationKey === null) {
      throw new Error("CRYPTOBADGE_SECRET_KEY is required");
    }

    const cipher = Crypto.createCipheriv(
      "aes-256-cbc",
      this.authorizationKey,
      Buffer.alloc(16),
    );
    const encryptedMsg =
      cipher.update(email, "utf8", "base64") + cipher.final("base64");
    return encryptedMsg.toString();
  }
}
