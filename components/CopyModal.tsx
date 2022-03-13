import React from 'react';

type Props = {
  id: string,
  text?: string,
};

function Button({ id }: Props) {
  return (
    <label className="btn btn-wide modal-button" htmlFor={id}>Copy</label>
  );
}

function Modal({ id, text }: Props) {
return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box">
          <h3 className="text-lg font-bold">Copy SVG url</h3>
          <p className="py-4">{text}</p>
          <h4 className="text-lg font-bold">Example</h4>
          <div className="mockup-code bg-base-300 text-base-content before:hidden mt-4">
            <pre>
              <code>
                {`<a>\n    <img src="${text}" alt="moon.svg" />\n  </a>`}
              </code>
            </pre>
          </div>
        </label>
      </label>
    </>
  );
}

const CopyModal = {
  Modal,
  Button,
}

export default CopyModal;