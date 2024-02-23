import { readFileSync } from "fs";
import { completeList } from "..";
import { parseBody } from "./parseSnippet";
import fs from "fs";
import { readMeFile } from "../constants";
import { prettyJSON } from "./prettyJSON";
import { slugify } from "./slugify";

// GENERATE SNIPPETS TABLE
export function generateTable() {
  let list = ``;
  let table = `
  <table>
    <thead>
      <tr>
        <th>Prefix</th>
        <th>Language</th>
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

    list += `<code>${name}</code> • `;
    table += `
  <tr><td colspan="2">
    <details>
      <summary><b>${name}</b></summary>
      <p>${description}</p>
    </details>
  </td></tr>
  <tr>
    <td><code>${prettyJSON(prefix)}</code></td>
    <td><code>js,jsx</code></td>  
  </tr>
  <tr><td colspan="2">

\`\`\`tsx
${Array.isArray(body) ? body.join("\n") : body}
\`\`\`

 </td></tr>`;

    if (rawTsBody) {
      const tsBody = parseBody(rawTsBody);
      list += `<code>${name}</code> • `;
      table += `
  <tr><td colspan="2">
    <details>
      <summary><b>${name}</b></summary>
      <p>${description}</p>
    </details>
  </td></tr>
  <tr>
    <td><code>${prettyJSON(prefix)}</code></td>
    <td><code>ts,tsx</code></td> 
  </tr>
  <tr><td colspan="2">

\`\`\`tsx
${Array.isArray(tsBody) ? tsBody.join("\n") : tsBody}
\`\`\`

 </td></tr>`;
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
  newReadme += `\n${list}\n\n${table}\n\n`;
  newReadme += readme.substring(end);

  fs.writeFileSync(readMeFile, newReadme);
}
