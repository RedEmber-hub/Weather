import { ReactSVG } from 'react-svg';
import { IconProps } from './Icon.type';

export default function Icon({ name, size = 24, color = 'currentColor' }: IconProps) {
  return (
    <ReactSVG
      src={`/icons/${name}.svg`}
      beforeInjection={(svg) => {
        svg.setAttribute('width', size.toString());
        svg.setAttribute('height', size.toString());
        svg.setAttribute('fill', color);
      }}
    />
  );
}
