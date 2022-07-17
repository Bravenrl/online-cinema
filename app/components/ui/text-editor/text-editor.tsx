import cn from 'classnames';
import {
  ContentState,
  EditorProps,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useEffect, useState } from 'react';
import { Editor as WysiwygEditor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { FieldError } from 'react-hook-form';

import styles from './text-editor.module.scss';

type TextEditorProps = Omit<
  EditorProps & {
    placeholder: string;
    error?: FieldError | undefined;
    onChange: (...event: any[]) => void;
    value: string;
  },
  'editorState'
>;

function TextEditor({
  onChange,
  value,
  placeholder,
  error,
}: TextEditorProps): JSX.Element {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    if (!isUpdated) {
      const defaultValue = value ? value : '';

      const blocksFromHTML = convertFromHTML(defaultValue);
      const contentState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );

      const newEditorState = EditorState.createWithContent(contentState);

      setEditorState(newEditorState);
    }
  }, [value, isUpdated]);

  const onEditorStateChange = (editorState: EditorState) => {
    setIsUpdated(true);
    setEditorState(editorState);
    return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <div className={cn(styles.common, styles.container, 'animate-fade')}>
      <label>
        <span>{placeholder}</span>
        <div className={styles.wrapper}>
          <WysiwygEditor
            toolbarClassName={styles.toolbar}
            editorClassName={styles.editor}
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            spellCheck
            toolbar={{
              options: ['inline', 'blockType', 'list'],
              inline: {
                inDropdown: false,
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
                options: ['bold', 'italic', 'underline', 'strikethrough'],
              },
              blockType: {
                inDropdown: false,
                options: [],
              },
              list: {
                inDrodown: false,
                options: ['unordered', 'ordered'],
              },
            }}
          />
        </div>
      </label>
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
}

export default TextEditor;
