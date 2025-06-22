import React from 'react';

import LoginCard from '@/components/Login/LoginCard';
import MainAppLayout from '@/components/layout/MainAppLayout';

/**
 * The main index page of the application, which serves as the login screen.
 * It utilizes the `MainAppLayout` to provide a centered, full-screen container
 * for the `LoginCard` component, creating the complete login page experience.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
