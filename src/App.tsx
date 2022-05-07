import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppendocWikiViewer from "./pages/AppendocWikiViewer";
import AppendocEditor from "./pages/AppendocEditor";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<AppendocWikiViewer/>}/>
                <Route path={"/edit"} element={<AppendocEditor/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
