'use client';

import React, { ChangeEvent, useRef, useState } from 'react';
import MDEditor, {
  commands,
  ICommand,
  TextAreaTextApi,
  TextState,
} from '@uiw/react-md-editor';

interface Props {
  postValue?: string;
  setPostValue: (value?: string) => void;
}

function Editor({ postValue, setPostValue }: Props) {
  const apiRef = useRef<TextAreaTextApi | null>(null);

  const editCommands = [...commands.getCommands()];
  const imageIndex = editCommands.findIndex((item) => item.name === 'image');

  const saveFileImage = async (
    event: ChangeEvent<HTMLInputElement>,
    api: TextAreaTextApi | null
  ) => {
    try {
      if (!event.target.files) return;

      const formData = new FormData();
      formData.append('image', event.target.files[0]);

      const response = await fetch('api/posts/make-post/upload-image', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
      });

      const result = await response.json();

      let modifyText = `![image](${result.url})`;
      if (api) api.replaceSelection(modifyText);
    } catch (error) {
      console.log(error);
    }
  };

  const image = {
    name: 'image',
    keyCommand: 'image',
    buttonProps: { 'aria-label': 'Insert image' },
    render: (
      command: ICommand,
      disabled: boolean,
      executeCommand: (command: ICommand, groupName?: string) => void
    ) => {
      return (
        <button
          aria-label="Insert title2"
          disabled={disabled}
          onClick={() => {
            executeCommand(command, command.groupName);
          }}
        >
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            required
            multiple
            style={{ display: 'none' }}
            onChange={(event) => saveFileImage(event, apiRef.current)}
          />
          <svg width="13" height="13" viewBox="0 0 20 20">
            <path
              fill="currentColor"
              d="M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"
            ></path>
          </svg>
        </button>
      );
    },
    execute: (_: TextState, api: TextAreaTextApi) => {
      const imageInput = document.getElementById('imageInput');
      apiRef.current = api;
      imageInput?.click();
    },
  };

  editCommands[imageIndex] = image;

  return (
    <div data-color-mode="light">
      <MDEditor
        visibleDragbar={false}
        enableScroll={false}
        height={800}
        value={postValue}
        onChange={setPostValue}
        commands={[...editCommands]}
      ></MDEditor>
    </div>
  );
}

export default Editor;
