import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from '../../config/navigation';

interface MobileMenuProps {
  links: NavLink[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links, isOpen, onClose }) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4">
      {links.map(link => (
        <Link
          key={link.path}
          to={link.path}
          className={`block py-2 text-sm font-medium ${
            location.pathname === link.path
              ? 'text-accent-purple'
              : 'text-gray-300 hover:text-white'
          }`}
          onClick={onClose}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default MobileMenu;