import { OptionInterface } from '@/components/molecules/WeatherHeader/WeatherHeader.type';

export interface SelectProps {
  options: OptionInterface[];
  value: OptionInterface;
  onChange: (selectedOption: OptionInterface) => void;
  placeholder: string;
}
