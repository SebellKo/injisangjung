'use client';

import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

function Editor() {
  const [value, setValue] = useState<string | undefined>('Hello');

  return (
    <div data-color-mode="light">
      <MDEditor
        visibleDragbar={false}
        enableScroll={false}
        height={800}
        value={value}
        onChange={setValue}
      ></MDEditor>
    </div>
  );
}

export default Editor;
