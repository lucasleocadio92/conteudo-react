import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Tema escuro "Tomorrow"
import 'prismjs/components/prism-jsx.min.js'; // Suporte ao JSX (React)

function CodeBlock({codigo}){
    useEffect(() => {
        // Aplica o destaque de sintaxe após o componente ser renderizado
        Prism.highlightAll();
      }, []);

    return(
    <>
        <pre className="language-jsx"><code>{codigo}</code></pre>    
    </>)
}

export default CodeBlock