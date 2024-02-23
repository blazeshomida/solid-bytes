import { Snippet } from "../types";

export const store: Record<string, Snippet> = {
  createStore: {
    prefix: "SStore",
    description:
      "Creates a reactive store that can be read through a proxy object and written with a setter function",
    body: "const [${2:state}, set${2/(.*)/${1:/capitalize}/}] = createStore${1}(${3})",
    tsBody:
      "const [${3:state}, set${3/(.*)/${1:/capitalize}/}] = createStore${1}<$2>(${4})",
  },
};
