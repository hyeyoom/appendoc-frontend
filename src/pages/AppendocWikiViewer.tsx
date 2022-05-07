import React from "react";
import AppendocNavigation from "../moles/AppendocNavigation";
import AppendocViewer from "../components/AppendocViewer";
import AppendocFooter from "../moles/AppendocFooter";

const AppendocWikiViewer = () => {
    return (
        <>
            <AppendocNavigation/>
            <AppendocViewer documentTitle={'Java'}/>
            <AppendocFooter/>
        </>
    )
}

export default AppendocWikiViewer