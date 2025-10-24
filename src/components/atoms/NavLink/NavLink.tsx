import { NavLink as ReactNavLink } from 'react-router';
import './NavLink.scss';
import classNames from 'classnames';

export default function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const getClassNames = ({ isActive }: { isActive: boolean }) =>
    classNames({
      'nav-link': true,
      'nav-link--active': isActive,
    });

  return (
    <>
      <ReactNavLink to={to} className={getClassNames}>
        {children}
      </ReactNavLink>
    </>
  );
}
