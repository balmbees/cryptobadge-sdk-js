import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import * as Crypto from "crypto";
import fetch from "node-fetch";

import { Queries } from "./queries";

export class CryptobadgeClient extends Queries<NormalizedCacheObject> {
  private _queryClient: ApolloClient<NormalizedCacheObject>;
  private _mutationClient: ApolloClient<NormalizedCacheObject>;

  private url: string;
  private accessToken: string;
  private authorizationKey: string | null;

  constructor(
    options: {
      url?: string;
      accessToken?: string;
      authorizationKey?: string;
    } = {}
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
      "x-cryptobadge-access-token": this.accessToken,
    };
    if (this.authorizationKey) {
      headers["x-cryptobadge-authorization"] = this.authorizationKey;
    }

    const postHttpLink = createHttpLink({
      fetch: fetch as any,
      headers,
      uri: this.url,
    });

    this._queryClient = new ApolloClient({
      cache: new InMemoryCache(),
      link: postHttpLink,
    });

    this._mutationClient = new ApolloClient({
      cache: new InMemoryCache(),
      link: postHttpLink,
    });
  }

  get queryClient() {
    if (process.env.STAGE === "test") return this._mutationClient;
    return this._queryClient;
  }

  get mutationClient() {
    return this._mutationClient;
  }

  public encryptEmail(email: string) {
    if (this.authorizationKey === null) {
      throw new Error("CRYPTOBADGE_SECRET_KEY is required");
    }

    const cipher = Crypto.createCipheriv(
      "aes-256-cbc",
      this.authorizationKey,
      Buffer.alloc(16)
    );
    const encryptedMsg =
      cipher.update(email, "utf8", "base64") + cipher.final("base64");
    return encryptedMsg.toString();
  }
}
