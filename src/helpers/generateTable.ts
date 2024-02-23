import { readFileSync } from "fs";
import { completeList } from "..";
import { parseBody } from "./parseSnippet";
import fs from "fs";
import { readMeFile } from "../constants";

// GENERATE SNIPPETS TABLE
export function generateTable() {
  let table = `
  <table>
    <thead>
      <tr>
        <th>Trigger</th>
        <th>Content</th>
        <th>Languages</th>
      </tr>
    </thead>
    <tbody>`;
  Object.entries(completeList).forEach(([name, snippet]) => {
    const { prefix, description, body, tsBody, key } = snippet;
    table += `<tr><td colspan="3"><h3>${prefix}</h3></td></tr>`;
    table += `
  <tr>
    <td><code>${name}→</code></td>
    <td>${description}</td>
    <td>${key || prefix}</td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

  \`\`\`tsx
  ${parseBody(body)}
  \`\`\`

  </details></td></tr>`;

    if (tsBody) {
      table += `
  <tr>
    <td><code>${name}→</code></td>
    <td>${description}</td>
    <td>${key || prefix}</td>
  </tr>
  <tr><td colspan="3"><details>
  <summary><sup>Toggle Code Snippet</sup></summary>

  \`\`\`tsx
  ${tsBody}
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
