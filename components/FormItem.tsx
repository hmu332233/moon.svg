import React, { HTMLInputTypeAttribute } from 'react';

type Props = {
  label: string;
  children: React.ReactNode;
};

function FormItem({ label, children }: Props) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      {children}
    </div>
  );
}

export default FormItem;
