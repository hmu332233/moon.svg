import React, { useEffect } from 'react';

import useToggle from 'hooks/useToggle';

import LiveToggle from 'components/LiveToggle';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
};

function ControlledLiveToggle({ name }: Props) {
  const { setValue, register, getValues } = useFormContext();
  const [isLiveMode, toggleIsLiveMode] = useToggle(getValues(name));

  useEffect(() => {
    register(name);
  }, [name, register]);

  useEffect(() => {
    setValue(name, isLiveMode);
  }, [name, isLiveMode, setValue]);

  return <LiveToggle value={isLiveMode} onClick={toggleIsLiveMode} />;
}

export default ControlledLiveToggle;
