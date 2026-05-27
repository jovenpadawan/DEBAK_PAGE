import { useState } from 'react';

/**
 * Hook personalizado para manejar la lógica del menú hamburguesa
 * @returns {Object} - isMenuActive, toggleMenu, handleNavigation
 */
export function useMenuToggle() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleNavigation = () => {
    setIsMenuActive(false);
  };

  return {
    isMenuActive,
    toggleMenu,
    handleNavigation
  };
}
