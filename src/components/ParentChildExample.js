import * as React from 'react';

const MyContext = React.createContext();

function Child() {
  return (
    <MyContext.Consumer>
      {({ name }) => <div>Hello, {name}!</div>}
    </MyContext.Consumer>
  );
}

function Parent() {
  return (
    <MyContext.Provider value={{ name: 'world' }}>
      <Child />
    </MyContext.Provider>
  );
}

export function ParentChildExample() {
  return <Parent />;
}
