import { Snippet } from "../types";

function invalidLine(line: string) {
  return !line.trim().length;
}

export function parseBody(rawBody: Snippet["body"]) {
  if (!/\n/.test(rawBody)) return rawBody.trim();
  const lines = rawBody.split("\n").filter((line) => !invalidLine(line));

  // Calculate the minimum number of leading spaces across all lines
  const minSpace = lines.reduce((min, line) => {
    const leadingSpaces = line.match(/^ */)?.[0].length || 0;
    return Math.min(min, leadingSpaces);
  }, Infinity);

  // Trim the minimum common leading spaces from each line
  const result = lines.map((line) => line.slice(minSpace));
  return result;
}

export function parseSnippet(
  name: string,
  {
    key,
    prefix,
    description,
    body: rawBody = "",
    tsBody = "",
  }: Snippet | Partial<Snippet>,
  typescript: boolean = false
) {
  return {
    [name]: {
      key,
      prefix,
      description,
      body: parseBody(typescript ? tsBody : rawBody),
    },
  };
}
