import * as React from 'react';
import { render } from 'react-dom';
import { ParentChildExample } from './components/ParentChildExample';
import { StateExample } from './components/StateExample';
import { CustomProviderExample } from './components/CustomProviderExample';

render(
  <div>
    <h1>ParentChild</h1>
    <ParentChildExample />
    <h1>State</h1>
    <StateExample />
    <h1>CustomProvider</h1>
    <CustomProviderExample />
  </div>,
  document.getElementById('root')
);
