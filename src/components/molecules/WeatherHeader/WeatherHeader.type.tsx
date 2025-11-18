export interface OptionInterface {
  value: string;
  label: string;
}

export interface WeatherHeaderProps {
  options: OptionInterface[];
  selectedCity: OptionInterface;
  onCityChange: (selectedOption: OptionInterface) => void;
}
