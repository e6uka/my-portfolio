import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  .bg-gradient-to-r,
  .bg-gradient-to-br {
    /* Gradients will remain constant */
  }
`;
