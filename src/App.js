import { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

// Enable line breaks with return
marked.setOptions({
  breaks: true,
});

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

[Visit FreeCodeCamp](https://www.freecodecamp.org)

Here is some inline code: \`const x = 10;\`

\`\`\`
function greet() {
  return "Hello, world!";
}
\`\`\`

- List item 1
- List item 2

> This is a blockquote!

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

**This is bolded text**
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => setMarkdown(e.target.value);

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1 className="text-2xl font-bold mb-4">Markdown Previewer</h1>

      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '200px',
          marginBottom: '2rem',
          padding: '1rem',
          fontFamily: 'monospace',
          fontSize: '1rem',
        }}
      />

      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        style={{
          border: '1px solid #ccc',
          padding: '1rem',
          backgroundColor: '#f9f9f9',
        }}
      />
    </div>
  );
}

export default App;
