import React from 'react';
import cn from 'classnames';

type Props = {
  value: boolean;
  onClick: () => void;
};

function LiveToggle({ value, onClick }: Props) {
  return (
    <div className="tabs tabs-boxed" onClick={onClick}>
      <a className={cn('tab tab-sm', !value && 'tab-active')}>Specific Date</a>
      <a className={cn('tab tab-sm', value && 'tab-active')}>Live</a>
    </div>
  );
}

export default LiveToggle;
