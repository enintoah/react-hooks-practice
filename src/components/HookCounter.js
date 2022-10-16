import React from "react";
import { useState } from "react";

export const HookCounter = () => {

  const [count, AddCounter] = useState(0)

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => AddCounter(count + 1)}>Count {count}</button>
    </div>
  )
}

