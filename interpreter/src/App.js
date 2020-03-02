import React from 'react';
import Language from './modules/Language'

import json from './main.json'

const  App = () => {
  const expressions = json.frontend.expression

  Language.evaluate(expressions)

  return (
    <div>
    </div>
  );
}

export default App;
