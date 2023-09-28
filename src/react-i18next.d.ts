import { ParseKeys } from "i18next";
import { Resources } from "react-i18next";

declare module "react-i18next" {
  type DefaultResources = (typeof resources)["en-US"];
  interface Resources extends DefaultResources {}
}

export type TranslationKeys = ParseKeys<(keyof Resources)[]>;
