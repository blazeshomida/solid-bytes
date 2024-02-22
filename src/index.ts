import { components } from "./snippets/components";
import { primitives } from "./snippets/primitives";
import { componentApis } from "./snippets/component-apis";
import { store } from "./snippets/store";
import { reactiveUtilities } from "./snippets/reactive-utilities";
import { Snippet } from "./types";
export const completeList: Record<string, Snippet> = {
  ...primitives,
  ...components,
  ...componentApis,
  ...store,
  ...reactiveUtilities,
};
