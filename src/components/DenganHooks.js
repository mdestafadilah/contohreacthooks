import React, { Component, useState, useEffect } from "react";

function DenganHooks() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times with Hooks`;
  });

  return (
    <div>
      <p>You clicked {count} times with Hooks</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default DenganHooks;
