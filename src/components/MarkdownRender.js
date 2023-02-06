import Markdown from 'marked-react';

function MarkdownRender({ inputText }) {
    return (
         <Markdown>{inputText}</Markdown>  
    );
};

export default MarkdownRender;