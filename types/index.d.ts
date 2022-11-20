type FormValues = {
  liveMode: boolean;
  date: string;
  size: string;
  theme: string;
  rotate: string;
  title?: string;
  description?: string;
};

type FormKeys = keyof FormValues;
