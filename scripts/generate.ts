import { completeList } from "../src";
import { parseSnippet } from "../src/helpers/parseSnippet";
import path from "path";
import fs from "fs";
import { Snippet } from "../src/types";
import { mergeSnippets } from "../src/helpers/mergeSnippets";
import { generateTable } from "../src/helpers/generateTable";
import { outDir, outFile, outFileTyped, vsCodeTestFile } from "../src/constants";

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
generateTable();

// console.log({
//   data: prettyJSON(data),
//   dataTyped: prettyJSON(dataTyped),
// });
