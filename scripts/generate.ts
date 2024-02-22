import { completeList } from "../src";
import { parseSnippet } from "../src/helpers/parseSnippet";
import path from "path";
import fs from "fs";
import { Snippet } from "../src/types";
import { mergeSnippets } from "../src/helpers/mergeSnippets";

function formatData(
  data: Record<string, Snippet | Partial<Snippet>>,
  typescript: boolean = false
) {
  return Object.entries(data).reduce((output, [name, snippet]) => {
    const result = parseSnippet(name, snippet, typescript);
    return {
      ...output,
      ...result,
    };
  }, {});
}

const prettyJSON = (value: any) => JSON.stringify(value, null, 2);
const data = formatData(completeList);
const dataTyped = mergeSnippets(data, formatData(completeList, true));

const projectRoot = __dirname.split("/").slice(0, -1).join("/");
const outDir = path.join(projectRoot, "snippets");
const outFile = path.join(outDir, "solidjs.code-snippets");
const outFileTyped = path.join(outDir, "solidjs-typed.code-snippets");
const vsCodeDir = path.join(projectRoot, ".vscode");
const vsCodeTestFile = path.join(vsCodeDir, "test.code-snippets");

function main() {
  if (outDir) {
    fs.rmSync(outDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outDir);
  fs.writeFileSync(outFile, prettyJSON(data));
  fs.writeFileSync(outFileTyped, prettyJSON(dataTyped));

  // vs-code test file
  fs.writeFileSync(vsCodeTestFile, prettyJSON(dataTyped));
}
main();

// console.log({
//   data: prettyJSON(data),
//   dataTyped: prettyJSON(dataTyped),
// });


