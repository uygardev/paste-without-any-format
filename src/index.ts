import { showHUD, Clipboard } from "@raycast/api";
import { isEmpty } from "./utils";

export default async function main() {
  const text = await Clipboard.readText();
  if (isEmpty(text))
    return showHUD("No any text in clipboard");
  
  const cleanedText = String(text).replace(/\s+/g, ' ').trim();
  await Clipboard.paste(cleanedText);
  await showHUD("Pasted as plain text without line breaks");
}
