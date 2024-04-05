'use client';

import { COMMAND_PRIORITY_CRITICAL } from 'lexical';

// Lexical 0.14.3 called in Client Component throws an error in nextjs SSR
// Error: Element type is invalid: expected a string (for built-in components)
// or a class/function (for composite components) but got: undefined.
export default function ClientComponent() {
  COMMAND_PRIORITY_CRITICAL;
  // const command = createCommand();

  // const node = getNearestEditorFromDOMNode(null);

  // const editor = createHeadlessEditor();

  // editor.getEditorState().read(() => {
  //   $getRoot();
  // });

  return <>hi</>;
}
