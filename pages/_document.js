import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url('/static/fonts/OpenSans-Bold.ttf');
    src: url('/static/fonts/OpenSans-Italic.ttf');
    src: url('/static/fonts/OpenSans-Light.ttf');
    src: url('/static/fonts/OpenSans-Regular.ttf');
    src: url('/static/fonts/OpenSans-SemiBold.ttf');
  } 
  html {
    height:100%;
  }
  body {
    margin: 0;
    padding: 0;  
    font-family: "Open Sans" 
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: inherit; /* 모든 엘리먼트의 box-sizing 값을 border-box로 설정 */ 
  }
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0'
          />
        </Head>
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
