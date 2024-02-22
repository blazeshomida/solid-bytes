import { Snippet } from "../types";

// Utility function to merge the 'body' of snippets from primitivesTyped into primitives
export function mergeSnippets(
  baseSnippets: Record<string, Snippet>,
  typedSnippets: Record<string, Partial<Snippet>>
): Record<string, Snippet> {
  const mergedSnippets: Record<string, Snippet> = { ...baseSnippets };

  Object.keys(typedSnippets).forEach((key) => {
    if (mergedSnippets[key] && typedSnippets[key].body) {
      mergedSnippets[key] = {
        ...mergedSnippets[key],
        body: typedSnippets[key].body!,
      };
    }
  });

  return mergedSnippets;
}
