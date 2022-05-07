import React from "react";
import './AppendocEditor.css';
import EditorHeader from "../components/EditorHeader";
import EditorMarkdownViewer from "../components/EditorMarkdownViewer";
import EditorPreview from "../components/EditorPreview";
import create from "zustand";

export const editorUseStore = create(() => ({
    title: '',
    rawMarkdown: '',
}))

const AppendocEditor = () => {
    return (
        <div className={'appendoc-editor'}>
            <div className={'appendoc-editor-wrapper'}>
                <EditorHeader/>
                <div className={'appendoc-editor-body'}>
                    <EditorMarkdownViewer/>
                    <EditorPreview/>
                </div>
            </div>
        </div>
    )
}

export default AppendocEditor;