const Layout = ({ children }) => {
  const layoutStyle = {
    margin: 0,
    padding: 0,
    border: '1px solid #DDD'
  };

  return (
    <div>
      <style jsx global>
        {`
          html {
            height: 100%;
          }
          body {
            margin: 0;
            padding: 0;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          * {
            box-sizing: inherit; /* 모든 엘리먼트의 box-sizing 값을 border-box로 설정 */
          }
          code {
          }
        `}
      </style>
      {children}
    </div>
  );
};

export default Layout;
