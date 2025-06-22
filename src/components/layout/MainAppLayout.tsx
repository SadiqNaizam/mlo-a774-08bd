import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names for the layout container.
   */
  className?: string;
}

/**
 * A main application layout component that centers its content on the screen.
 * This implementation aligns with the 'AuthLayout' requirement for the login page,
 * providing a fullscreen container that centers its children both vertically and horizontally.
 * The background color is applied globally via `index.css`.
 *
 * @param {MainAppLayoutProps} props - The component props.
 * @returns {JSX.Element} The rendered layout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex h-screen w-full items-center justify-center',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
