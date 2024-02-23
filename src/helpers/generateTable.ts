import { readFileSync } from "fs";
import { completeList } from "..";
import { parseBody } from "./parseSnippet";
import fs from "fs";
import { readMeFile } from "../constants";
import { prettyJSON } from "./prettyJSON";

// GENERATE SNIPPETS TABLE
export function generateTable() {
  let table = `
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Content</th>
        <th>Prefix</th>
      </tr>
    </thead>
    <tbody>`;
  Object.entries(completeList).forEach(([name, snippet]) => {
    const {
      prefix,
      description,
      body: rawBody,
      tsBody: rawTsBody,
      key,
    } = snippet;
    const body = parseBody(rawBody);

    table += `
  <tr>
    <td>${name}</td>
    <td>${description}</td>
    <td><code>${prettyJSON(prefix)}→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

\`\`\`tsx
${Array.isArray(body) ? body.join("\n") : body}
\`\`\`

  </details></td></tr>`;

    if (rawTsBody) {
      const tsBody = parseBody(rawTsBody);
      table += `
  <tr>
    <td>${name}</td>  
    <td>${description}</td>
    <td><code>${prettyJSON(prefix)}→</code></td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

\`\`\`tsx
${Array.isArray(tsBody) ? tsBody.join("\n") : tsBody}
\`\`\`

  </details></td></tr>`;
    }
  });
  table += `</tbody></table>`;

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
  newReadme += `\n${table}\n\n`;
  newReadme += readme.substring(end);

  fs.writeFileSync(readMeFile, newReadme);
}
