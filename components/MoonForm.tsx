import React, { useEffect } from 'react';

import { debounce } from 'utils';
import { objectToQueryString } from 'utils/string';

import { FormProvider, useForm } from 'react-hook-form';
import ControlledLiveToggle from 'components/ControlledLiveToggle';

type Props = {
  onChange: (v: string) => void;
};

function MoonForm({ onChange }: Props) {
  const formMethods = useForm({
    defaultValues: {
      liveMode: true,
      dateString: '',
      size: '',
      theme: 'basic',
      rotate: '0',
    },
  });

  const { register, watch } = formMethods;

  const liveMode = watch('liveMode');

  useEffect(() => {
    const subscription = watch(
      debounce(({ liveMode, dateString, size, theme, rotate }) => {
        const queryString = objectToQueryString({
          liveMode,
          date: liveMode ? '' : dateString,
          size,
          theme,
          rotate,
        });

        onChange(queryString);
      }, 100),
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <FormProvider {...formMethods}>
      <ControlledLiveToggle name="liveMode" />
      {!liveMode && (
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            className="input input-bordered w-full max-w-xs"
            {...register('dateString')}
          />
        </div>
      )}
      <div className="form-control w-full max-w-xs">
        <label className="label" htmlFor="theme">
          <span className="label-text">Theme</span>
        </label>
        <select
          id="theme"
          className="select input-bordered w-full max-w-xs"
          {...register('theme')}
        >
          <option value="basic">Basic</option>
          <option value="ray">Ray</option>
        </select>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Rotate</span>
        </label>
        <input
          type="range"
          min="0"
          max="360"
          className="range"
          {...register('rotate')}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Size</span>
        </label>
        <input
          type="number"
          placeholder="100 (default)"
          className="input input-bordered w-full max-w-xs"
          {...register('size')}
        />
      </div>
    </FormProvider>
  );
}

export default MoonForm;
