import * as React from 'react';

const MyContext = React.createContext();

class MyState {
  name = 'world';
}

function Child() {
  return (
    <MyContext.Consumer>
      {({ name }) => <div>Hello, {name}!</div>}
    </MyContext.Consumer>
  );
}

class Parent extends React.Component {
  state = { myState: new MyState() };

  render() {
    return (
      <MyContext.Provider value={this.state.myState}>
        <Child />
      </MyContext.Provider>
    );
  }
}

export function StateExample() {
  return <Parent />;
}
