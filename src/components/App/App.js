import React from 'react';
import content from '../../content/content.json'

function App() {
  return (
    <div className="App">
      <h1>{content.title}</h1>
      <h2>{content.subtitle}</h2>
      <p>{content.paragraph}</p>
      <p>{content.paragraph}</p>
      <p>{content.paragraph}</p>
      <p>{content.paragraph}</p>
      <h2>{content.subtitle}</h2>
      <p>{content.paragraph}</p>
      <p>{content.paragraph}</p>
      <p>{content.paragraph}</p>
    </div>
  );
}

export default App;
