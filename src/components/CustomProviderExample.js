import * as React from 'react';

const MyContext = React.createContext();

class MyProvider extends React.Component {
  state = { name: 'world' };

  changeName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          changeName: this.changeName,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const MyConsumer = MyContext.Consumer;

function Child() {
  return (
    <MyConsumer>
      {({ name, changeName }) => (
        <div>
          <div>Hello, {name}!</div>
          <button onClick={() => changeName(`${name}!`)}>Click</button>
        </div>
      )}
    </MyConsumer>
  );
}

function Parent() {
  return (
    <MyProvider>
      <Child />
    </MyProvider>
  );
}

export function CustomProviderExample() {
  return <Parent />;
}
