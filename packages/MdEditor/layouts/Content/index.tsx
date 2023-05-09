import React, { useContext, useState } from 'react';
import { prefix } from '~/config';
import { EditorContext } from '~/Editor';
import ContentPreview from './ContentPreview';
import { useAutoScroll, useCodeMirror } from './hooks';
import { ContentProps } from './props';

import './index.less';

const Content = (props: ContentProps) => {
  const { editorId } = useContext(EditorContext);

  const [html, setHtml] = useState<string>('');

  const { inputWrapperRef, codeMirrorUt } = useCodeMirror(props);
  // 自动滚动
  useAutoScroll(props, html, codeMirrorUt);

  return (
    <div className={`${prefix}-content`}>
      <div className={`${prefix}-input-wrapper`} ref={inputWrapperRef}></div>
      <ContentPreview
        value={props.value}
        setting={props.setting}
        onHtmlChanged={(html_) => {
          setHtml(html_);
          props.onHtmlChanged(html_);
        }}
        onGetCatalog={props.onGetCatalog}
        mdHeadingId={props.mdHeadingId}
        noMermaid={props.noMermaid}
        sanitize={props.sanitize}
        noKatex={props.noKatex}
        formatCopiedText={props.formatCopiedText}
        noHighlight={props.noHighlight}
        show={props.setting.preview}
        key="display-editor"
      />
      <div
        id={`${editorId}-html-wrapper`}
        className={`${prefix}-preview-wrapper`}
        data-show={props.setting.htmlPreview}
        key="html-preview-wrapper"
      >
        <div className={`${prefix}-html`}>{html}</div>
      </div>
    </div>
  );
};

export default React.memo(Content);
