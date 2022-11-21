type FormValues = {
  date: string;
  theme: string;
  liveMode?: boolean;
  size?: string;
  rotate?: string;
  title?: string;
  description?: string;
};

type FormKeys = keyof FormValues;
