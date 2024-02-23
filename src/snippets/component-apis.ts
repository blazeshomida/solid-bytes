import { Snippet } from "../types";

export const componentApis: Record<string, Snippet> = {
  children: {
    prefix: "SChildren",
    description: "Resolves child elements to help interact with children",
    body: "const ${2} = children${1}(() => ${3:props.children})",
  },
  context: {
    prefix: "SContext",
    description:
      "Creates a Context to handle a state scoped for the children of a component. use a context to receive a scoped state from a parent's Context.Provider",
    body: `
    export const \${2}Context = createContext\${1}(\${3})
    export function use\${2}Context() {
      const context = useContext\${1}(\${2}Context)
      if (!context) {
        throw new Error("use\${2}Context: cannot find a \${2}Context")
      }
      return context
    }
    export function \${2:Counter}Provider() {
      return (
        <\${2:Counter}Context.Provider value={\${3:counter}}>
          {props.children}
        </\${2:Counter}Context.Provider>
      )
    }
    `,
  },
  createUniqueId: {
    prefix: "SUuid",
    description:
      "A universal id generator that is stable across server/browser. Note: on the server this only works under hydratable components",
    body: "const ${2:id} = createUniqueId${1}()",
  },
  lazy: {
    prefix: "SLazy",
    description:
      "Used to lazy load components to allow for code splitting. Components are not loaded until rendered",
    body: 'const ${2} = lazy${1}(() => import("${3}"))',
  },
};
