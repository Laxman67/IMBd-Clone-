import { ThemeProvider } from 'next-themes';
import React from 'react';

const Provider = ({ children }) => {
  return <ThemeProvider enableSystem={true}>{children}</ThemeProvider>;
};

export default Provider;
