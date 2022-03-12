import React from 'react';

import IndexRouter from "./router/IndexRouter";


import MainLayOut from "./layouts/MainLayOut";

const App = () => {
  return (
    <>
      <MainLayOut>
        <IndexRouter />,
      </MainLayOut>
    </>
  );
}

export default React.memo(App);
