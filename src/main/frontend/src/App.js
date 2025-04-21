import React from "react";
import Hello from "./components/Hello";  // Hello 컴포넌트 import

const App = () => {
  return (
      <div className="App">
        <h1>Welcome to React!</h1>
        <Hello />  {/* Hello 컴포넌트 사용 */}
      </div>
  );
};

export default App;