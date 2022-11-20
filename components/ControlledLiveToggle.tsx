import React, { useEffect } from 'react';

import useToggle from 'hooks/useToggle';

import LiveToggle from 'components/LiveToggle';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
};

function ControlledLiveToggle({ name }: Props) {
  const [isLiveMode, toggleIsLiveMode] = useToggle(true);

  const { setValue, register } = useFormContext();

  useEffect(() => {
    register(name);
  }, [name, register]);

  useEffect(() => {
    setValue(name, isLiveMode);
  }, [name, isLiveMode, setValue]);

  return <LiveToggle value={isLiveMode} onClick={toggleIsLiveMode} />;
}

export default ControlledLiveToggle;
