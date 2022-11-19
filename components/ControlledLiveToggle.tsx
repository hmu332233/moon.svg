import React, { useEffect } from 'react';

import useToggle from 'hooks/useToggle';

import LiveToggle from 'components/LiveToggle';
import { useFormContext } from 'react-hook-form';

type Props = {};

function ControlledLiveToggle({}: Props) {
  const [isLiveMode, toggleIsLiveMode] = useToggle(true);

  const { setValue, register } = useFormContext();

  useEffect(() => {
    register('liveMode');
  }, []);

  useEffect(() => {
    setValue('liveMode', isLiveMode);
  }, [isLiveMode]);

  return <LiveToggle value={isLiveMode} onClick={toggleIsLiveMode} />;
}

export default ControlledLiveToggle;
