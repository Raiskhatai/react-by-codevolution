import { useEffect, useRef, useState } from "react";

const Parent12 = () => {
  const [timer, settimer] = useState(1);
  const InterValRef = useRef<number | undefined>(undefined);

  const stoptimer = () => {
    window.clearInterval(InterValRef.current);
  };

  useEffect(() => {
    InterValRef.current = window.setInterval(() => {
      settimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stoptimer();
    };
  }, []);

  return (
    <div>
      timer - {timer} <br />
      <button onClick={() => stoptimer()}>stop</button>
    </div>
  );
};

export default Parent12;

// const Parent12 = () => {
//   const refrencevalue = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     refrencevalue.current?.focus();
//   });

//   return (
//     <div>
//       <input type="text" ref={refrencevalue} placeholder="write something" />
//     </div>
//   );
// };

// export default Parent12;
