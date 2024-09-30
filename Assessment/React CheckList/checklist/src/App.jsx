import React from 'react';
import Checklist from './Components/CheckList';

const items = ['Item 1', 'Item 2', 'Item 3'];

const App = () => {
  return (
    <div>
      <Checklist items={items} />
    </div>
  );
};

export default App;