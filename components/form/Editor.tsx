'use client';
import './editor.css';
import * as React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
// import Toolbar from "./ui/Toolbar";
import Toolbar from './ui/Toolbar';
import Image from '@tiptap/extension-image';

// import Heading from "@tiptop/extension-heading";
import Heading from '@tiptap/extension-heading';
import BulletList from '@tiptap/extension-bullet-list';
import TextAlign from '@tiptap/extension-text-align';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';

const Editor = ({
  description,
  onChange,
}: {
  description?: string;
  onChange: (richText: string) => void;
}) => {
  const [showCode, setShowCode] = React.useState(false);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Heading.configure({
        levels: [1, 2, 3, 4],
      }),
      Image,
      Bold,
      Italic,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
      TableHeader,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      BulletList.configure({
        keepMarks: true,
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class: 'rounded-md border h-full border-input bg-back p-5',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className='flex flex-col justify-stretch  h-full editor'>
      <Toolbar editor={editor} setShowCode={setShowCode} showCode={showCode} />
      {!showCode ? (
        <div>
          <EditorContent editor={editor} />
        </div>
      ) : (
        <>
          <textarea
            className='h-96 border'
            onChange={(e) => onChange(e.target.value)}
          >
            {description}
          </textarea>
        </>
      )}
    </div>
  );
};

export default Editor;
