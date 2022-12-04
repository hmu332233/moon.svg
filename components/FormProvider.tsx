import React from 'react';

import {
  FormProvider as ReactHookFormProvider,
  useForm,
} from 'react-hook-form';

const DEFAULT_FORM_VALUES: FormValues = {
  liveMode: true,
  date: '',
  size: '',
  theme: 'basic',
  rotate: '0',
} as const;

type Props = {
  defaultValues?: FormValues;
  children: React.ReactNode;
};

function FormProvider({
  defaultValues = DEFAULT_FORM_VALUES,
  children,
}: Props) {
  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  return (
    <ReactHookFormProvider {...formMethods}>{children}</ReactHookFormProvider>
  );
}

export default FormProvider;
