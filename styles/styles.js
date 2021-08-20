import { Global, css } from '@emotion/react';

const GlobalStyle = ({ children }) => (
  <>
    <Global
      styles={css`
        html {
          scoll-behavior: smooth;
          cursor: default;
          p {
            font-color: #ff0000;
          }
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}
    />
    {children}
  </>
);

export default GlobalStyle;
