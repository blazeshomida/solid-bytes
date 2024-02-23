import { Snippet } from "../types";

export const reactiveUtilities: Record<string, Snippet> = {
  batch: {
    prefix: "SBatch",
    description:
      "Execute a callback that will not side-effect until its top-most batch is completed",
    body: "batch${1}(() => { ${2:set${3:State}(${4})} });",
  },
  catchError: {
    prefix: "SCatchError",
    description:
      "Run an effect whenever an error is thrown within the context of the child scopes",
    body: "const ${4:result} = catchError${1}(${2:() => {${3}\\}});",
  },
};
