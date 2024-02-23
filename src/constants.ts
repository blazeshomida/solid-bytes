import path from "path";

// Textmate Variables
export const TM = {
  selected: "${TM_SELECTED_TEXT}",
  currentLine: "${TM_CURRENT_LINE}",
  currentWord: "${TM_CURRENT_WORD}",
  lineIndex: "${TM_LINE_INDEX}",
  lineNumber: "${TM_LINE_NUMBER}",
  filename: "${TM_FILENAME}",
  filenameBase: "${TM_FILENAME_BASE}",
  directory: "${TM_DIRECTORY}",
  filepath: "${TM_FILEPATH}",
  relativeFilepath: "${RELATIVE_FILEPATH}",
  clipboard: "${CLIPBOARD}",
  workspaceName: "${WORKSPACE_NAME}",
  workspaceFolder: "${WORKSPACE_FOLDER}",
  cursorIndex: "${CURSOR_INDEX}",
  cursorNumber: "${CURSOR_NUMBER}",
  currentYear: "${CURRENT_YEAR}",
  currentYearShort: "${CURRENT_YEAR_SHORT}",
  currentMonth: "${CURRENT_MONTH}",
  currentMonthName: "${CURRENT_MONTH_NAME}",
  currentMonthNameShort: "${CURRENT_MONTH_NAME_SHORT}",
  currentDate: "${CURRENT_DATE}",
  currentDayName: "${CURRENT_DAY_NAME}",
  currentDayNameShort: "${CURRENT_DAY_NAME_SHORT}",
  currentHour: "${CURRENT_HOUR}",
  currentMinute: "${CURRENT_MINUTE}",
  currentSecond: "${CURRENT_SECOND}",
  currentSecondsUnix: "${CURRENT_SECONDS_UNIX}",
  currentTimezoneOffset: "${CURRENT_TIMEZONE_OFFSET}",
  random: "${RANDOM}",
  randomHex: "${RANDOM_HEX}",
  uuid: "${UUID}",
  blockCommentStart: "${BLOCK_COMMENT_START}",
  blockCommentEnd: "${BLOCK_COMMENT_END}",
  lineComment: "${LINE_COMMENT}",
};

export const projectRoot = __dirname.split("/").slice(0, -1).join("/");
export const outDir = path.join(projectRoot, "snippets");
export const outFile = path.join(outDir, "solid.code-snippets");
export const outFileTyped = path.join(outDir, "solid-typed.code-snippets");
export const vsCodeDir = path.join(projectRoot, ".vscode");
export const vsCodeTestFile = path.join(vsCodeDir, "test.code-snippets");
export const readMeFile = path.join(projectRoot, "README.md");
