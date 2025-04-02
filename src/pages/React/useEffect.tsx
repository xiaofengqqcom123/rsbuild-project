/**
 * 开发中遇到的关于useEffect的坑
 * 1. 在useEffect中使用setState，会导致页面闪烁
 * 2. 在useEffect中使用setTimeout，会导致页面闪烁
 * 3. 在useEffect中使用setInterval，会导致页面闪烁
 * 4. 在useEffect中使用requestAnimationFrame，会导致页面闪烁
 * 5. 在useEffect中使用requestAnimationFrame，会导致页面闪烁
 */
import { useState, useEffect, useLayoutEffect } from 'react';

// ------------------------------------------------------------------------------------------------------------
// Increment the counter to 3
// Press “Show alert”
// Increment it to 5 before the timeout fires
// 问：打印结果是什么？
// https://overreacted.io/a-complete-guide-to-useeffect/

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   function handleAlertClick() {
//     setTimeout(() => {
//       alert('You clicked on: ' + count);
//     }, 3000);
//   }

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       <button onClick={handleAlertClick}>Show alert</button>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------
// //  在useEffect中使用setState，会导致页面闪烁
// export default function Counter() {
//   const [count, setCount] = useState(0);

//   // 在useEffect中使用setState，会导致页面闪烁
//   useEffect(() => {
//     setCount(count + 1);
//   }, []);

//   // 在useLayoutEffect中使用setState，不会导致页面闪烁
//   // useLayoutEffect(() => {
//   //   setCount(count + 1);
//   // }, []);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------
export default function Counter() {
  const [count, setCount] = useState(0);

  // 方式一
  // 会连续打印出 1， 2， 3....
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // }, [count]);

  // 方式二
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('count', count);
  //     // 会打印出 2， 因为在 React 18 中，默认启用了严格模式。在严格模式下，React 会故意在开发环境中对组件进行两次渲染，以帮助开发者发现潜在的问题。
  //     // 所以 count 的值是 2，而不是 1
  //     setCount((count) => count + 1);
  //   }, 3000);
  // }, []);

  // 方式三
  // 会连续打印出 1， 2， 3....
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
