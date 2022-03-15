import React from 'react';

import CodeBox from 'components/CodeBox';

type ButtonProps = {
  id: string;
};

function Button({ id }: ButtonProps) {
  return (
    <label className="btn btn-wide modal-button" htmlFor={id}>
      Copy
    </label>
  );
}

type ModalProps = {
  id: string;
  text: string;
};

function Modal({ id, text }: ModalProps) {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box">
          <h3 className="text-lg font-bold">SVG Url</h3>
          <CodeBox contents={text} />
          <h4 className="text-lg font-bold">HTML Example</h4>
          <CodeBox
            contents={`<a href="https://moon-svg.minung.dev">\n    <img src="${text}" alt="moon.svg" />\n  </a>`}
          />
          <h4 className="text-lg font-bold">Markdown Example</h4>
          <CodeBox
            contents={`[![Moon.svg](${text})](https://moon-svg.minung.dev)`}
          />
        </label>
      </label>
    </>
  );
}

const CopyModal = {
  Modal,
  Button,
};

export default CopyModal;
