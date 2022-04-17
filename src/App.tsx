import React from 'react';
import AppendocNavigation from "./moles/AppendocNavigation";
import AppendocViewer from "./components/AppendocViewer";
import AppendocFooter from "./moles/AppendocFooter";

const App = () => {
  return (
      <>
          <AppendocNavigation/>
          <AppendocViewer documentTitle={'Java'}/>
          <AppendocFooter/>
      </>
  )
}

export default App;
