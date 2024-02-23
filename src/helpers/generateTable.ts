import { readFileSync } from "fs";
import { completeList } from "..";
import { parseBody } from "./parseSnippet";
import fs from "fs";
import { readMeFile } from "../constants";
import { prettyJSON } from "./prettyJSON";
import { slugify } from "./slugify";
import { Snippet } from "../types";

type TableRow = Omit<Snippet, "body" | "tsBody"> & {
  name: string;
  ts?: boolean;
  body: string | string[];
};

function addListItem(name: string, ts: boolean = false) {
  return `<code>[${ts ? name + ".ts" : name}](#${slugify(
    ts ? name + ".ts" : name
  )})</code> • `;
}

function addTableRow({ name, description, prefix, body, ts }: TableRow) {
  return `
### ${ts ? name + ".ts" : name}
<details>
  <summary><sup>View Details</sup></summary>
  <p>${description}</p>
</details>
<div>
  <span><code>${prettyJSON(prefix)}</code></span>
  <span><code>${ts ? "ts,tsx" : "js,jsx"}</code></span>  
</div>
    
\`\`\`tsx
${Array.isArray(body) ? body.join("\n") : body}
\`\`\`

<sub>[Back to top](#full-list)</sub>
`;
}

// GENERATE SNIPPETS TABLE
export function generateTable() {
  let list = ``;
  let table = ``;
  Object.entries(completeList).forEach(([name, snippet]) => {
    const {
      prefix,
      description,
      body: rawBody,
      tsBody: rawTsBody,
      key,
    } = snippet;
    const body = parseBody(rawBody);
    list += addListItem(name);
    table += addTableRow({ name, body, prefix, description });

    if (rawTsBody) {
      const tsBody = parseBody(rawTsBody);
      list += addListItem(name, true);
      table += addTableRow({
        name,
        body: tsBody,
        prefix,
        description,
        ts: true,
      });
    }
  });

  const readme = readFileSync(readMeFile).toString();
  let start = readme.indexOf(
    "-->",
    readme.indexOf("GENERATE-SNIPPETS-TABLE:START")
  );
  if (start === -1)
    return console.log(
      "Couldn't find GENERATE-SNIPPETS-TABLE:START tag in README.md"
    );
  start += 3;

  const end = readme.indexOf("<!--", start);
  if (end === -1)
    return console.log(
      "Couldn't find GENERATE-SNIPPETS-TABLE:END tag in README.md"
    );

  let newReadme = readme.substring(0, start);
  newReadme += `\n${list}\n\n${table}\n\n`;
  newReadme += readme.substring(end);

  fs.writeFileSync(readMeFile, newReadme);
}
