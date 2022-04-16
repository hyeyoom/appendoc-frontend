import React from 'react';
import AppendocNavigation from "./moles/AppendocNavigation";
import AppendocViewer from "./components/AppendocViewer";

const App = () => {
  return (
      <>
          <AppendocNavigation/>
          <AppendocViewer documentTitle={'Java'}/>
      </>
  )
}

export default App;
