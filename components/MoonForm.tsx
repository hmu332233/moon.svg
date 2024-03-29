import React, { useEffect } from 'react';

import { debounce } from 'utils';
import { useFormContext } from 'react-hook-form';
import ControlledLiveToggle from 'components/ControlledLiveToggle';
import FormItem from './FormItem';

const DEFAULT_FORM_KEYS: FormKeys[] = ['theme', 'size', 'rotate'];

type Props = {
  keys?: FormKeys[];
  onChange: (v: FormValues) => void;
};

function MoonForm({ keys = DEFAULT_FORM_KEYS, onChange }: Props) {
  const { register, watch } = useFormContext();
  const liveMode = watch('liveMode');

  useEffect(() => {
    const subscription = watch(
      debounce((values: FormValues) => {
        onChange(values);
      }, 100),
    );
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  const formItemMap: { [key: string]: React.ReactNode } = {
    date: (
      <FormItem key="date" label="Date">
        <input
          type="date"
          className="input input-bordered w-full max-w-xs"
          {...register('date')}
        />
      </FormItem>
    ),
    size: (
      <FormItem key="size" label="Size">
        <input
          type="number"
          placeholder="100 (default)"
          className="input input-bordered w-full max-w-xs"
          {...register('size')}
        />
      </FormItem>
    ),
    theme: (
      <FormItem key="theme" label="Theme">
        <select
          id="theme"
          className="select input-bordered w-full max-w-xs"
          {...register('theme')}
        >
          <option value="basic">Basic</option>
          <option value="ray">Ray</option>
        </select>
      </FormItem>
    ),
    rotate: (
      <FormItem key="rotate" label="Rotate">
        <input
          type="range"
          min="0"
          max="360"
          className="range"
          {...register('rotate')}
        />
      </FormItem>
    ),
    title: (
      <FormItem key="title" label="Title">
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          {...register('title')}
        />
      </FormItem>
    ),
    description: (
      <FormItem key="description" label="Description">
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          {...register('description')}
        />
      </FormItem>
    ),
  };

  return (
    <>
      {/* TODO: date도 item으로 관리할 수 있도록 변경 */}
      <ControlledLiveToggle name="liveMode" />
      {!liveMode && formItemMap.date}
      {keys.map((key) => formItemMap[key])}
    </>
  );
}

export default MoonForm;
