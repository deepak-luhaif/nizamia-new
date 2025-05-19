import { type Editor } from '@tiptap/react';
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  Heading1,
  Heading2,
  Heading3,
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Table,
  Image,
  Code2,
} from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import axios from 'axios';
import { URL } from '@/lib/constant';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Props = {
  editor: Editor | null;
  setShowCode?: any;
  showCode?: boolean;
};

const Toolbar = ({ editor, setShowCode, showCode }: Props) => {
  if (!editor) {
    return null;
  }
  const uploadImage = async (file: File | undefined | null) => {
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('image', file, file.name);

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/upload/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (data) {
        editor
          .chain()
          .focus()
          .setImage({ src: `${URL}${data}` })
          .run();
      }

      // handle the error
    } catch (e: any) {
      // Handle errors here
      // console.error(e);
    } finally {
    }
  };

  return (
    <div className='border border-input bg-transparent rounded px-2 py-2 flex gap-2 flex-wrap'>
      <Toggle
        size='sm'
        variant={'outline'}
        pressed={editor.isActive('heading', { level: 1 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <Heading1 className='h4 w-4' />
        {/* Heading 1 */}
      </Toggle>
      <Toggle
        size='sm'
        variant={'outline'}
        pressed={editor.isActive('heading', { level: 2 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 className='h4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        variant={'outline'}
        pressed={editor.isActive('heading', { level: 3 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        }
      >
        <Heading3 className='h4 w-4' />
      </Toggle>

      <Toggle
        size='sm'
        variant={'outline'}
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className='h4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        variant={'outline'}
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className='h4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        variant={'outline'}
        pressed={editor.isActive('strike')}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className='h4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        variant={'outline'}
        pressed={editor.isActive('bulletList')}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className='h4 w-4' />
      </Toggle>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Toggle size='sm' variant={'outline'}>
            <Table className='h4 w-4' />
          </Toggle>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <Toggle
              size='sm'
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                  .run()
              }
            >
              Insert Table
            </Toggle>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Toggle
              onClick={() => editor.chain().focus().addRowBefore().run()}
              disabled={!editor.can().addRowBefore()}
            >
              Insert Row Before
            </Toggle>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {' '}
            <Toggle
              onClick={() => editor.chain().focus().addRowAfter().run()}
              disabled={!editor.can().addRowAfter()}
            >
              Insert Row After
            </Toggle>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Toggle
              onClick={() => editor.chain().focus().addColumnBefore().run()}
              disabled={!editor.can().addColumnBefore()}
            >
              Insert Column Before
            </Toggle>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Toggle
              onClick={() => editor.chain().focus().addColumnAfter().run()}
              disabled={!editor.can().addColumnAfter()}
            >
              Insert Column After
            </Toggle>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Toggle
        variant={'outline'}
        size='sm'
        pressed={editor.isActive({ textAlign: 'left' })}
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        <AlignLeft className='h4 w-4' />
      </Toggle>
      <Toggle
        variant={'outline'}
        size='sm'
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        pressed={editor.isActive({ textAlign: 'center' })}
      >
        <AlignCenter className='h4 w-4' />
      </Toggle>
      <Toggle
        variant={'outline'}
        size='sm'
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        pressed={editor.isActive({ textAlign: 'right' })}
      >
        <AlignRight className='h4 w-4' />
      </Toggle>
      <Toggle
        variant={'outline'}
        size='sm'
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        pressed={editor.isActive({ textAlign: 'justify' })}
      >
        <AlignJustify className='h4 w-4' />
      </Toggle>

      <Toggle
        size='sm'
        variant={'outline'}
        pressed={showCode}
        onPressedChange={() => setShowCode(!showCode)}
      >
        <Code2 className='h4 w-4' />
      </Toggle>
      <Toggle size='sm' title='Click to upload' variant={'outline'} asChild>
        <div className='button-group'>
          <div className='relative'>
            <label title='Click to upload' htmlFor='button2'>
              <Image className='w-4 h-4' />
            </label>
            <input
              hidden
              type='file'
              name='button2'
              id='button2'
              onChange={(e) => {
                e.target.files && uploadImage(e.target?.files[0]);
              }}
            />
          </div>
        </div>
      </Toggle>

      {/* <button onClick={addImage}>Add image from URL</button> */}
    </div>
  );
};

export default Toolbar;
