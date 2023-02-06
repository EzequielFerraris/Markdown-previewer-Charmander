import Markdown from 'marked-react';

function MarkdownRender({ inputText }) {
    return (
         <Markdown breaks={true} gfm={true}>{inputText}</Markdown>  
    );
};

export default MarkdownRender;