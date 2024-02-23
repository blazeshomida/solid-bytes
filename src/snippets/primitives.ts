import { Snippet } from "../types";

export const primitives: Record<string, Snippet> = {
  createSignal: {
    prefix: "SSignal",
    description: "Creates a simple reactive state with a getter and setter",
    body: "const [${2:state}, set${2/(.*)/${1:/capitalize}/}] = createSignal${1}(${3})",
    tsBody:
      "const [${3:state}, set${3/(.*)/${1:/capitalize}/}] = createSignal${1}<${2}>(${4:null})",
  },
  createEffect: {
    prefix: "SEffect",
    description:
      "Creates a reactive computation that runs after the render phase",
    body: "createEffect${1}(() => { ${2} })",
    tsBody: "createEffect${1}<${2}>(() => { ${3} })",
  },
  createMemo: {
    prefix: "SMemo",
    description: "Creates a readonly derived reactive memoized signal",
    body: "const ${2:value} = createMemo${1}(() => ${3})",
    tsBody: "const ${3:value} = createMemo${1}<${2}>(() => {$4})",
  },
  createResource: {
    prefix: "SResource",
    description:
      "Creates a resource that wraps a repeated promise in a reactive pattern",
    body: "const [${2:data}, { mutate, refetch }] = createResource${1}(${3})",
  },
};
