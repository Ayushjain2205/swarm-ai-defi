import React, { useState, useEffect, useRef } from "react";
import Loader from "../UI/Loader";
import UseInput from "../UI/UseInput";
import UseBlock from "../Layout/UseBlock";
import UseThinking from "../UI/UseThinking";

const Report = ({ addNextNode }) => {
  const [stateIndex, setStateIndex] = useState(0);
  const addNextNodeCalled = useRef(false);

  const states = [
    {
      component: (
        <>
          <Loader isRunning={true} />
          <UseThinking question="Curating a detailed PDF for you" />
        </>
      ),
      duration: 5000,
    },
    {
      component: (
        <>
          <Loader isRunning={true} />
          <UseThinking question="Almost there!" />
        </>
      ),
      duration: 5000,
    },
    {
      component: (
        <>
          <UseThinking question="Here you go, enjoy learning!" stopped />
          <div className="flex flex-row justify-center items-center gap-[10px]">
            <p className="text-[#25A7DC] text-center text-[11px] font-[500]">
              COMPLETE_AI_COURSE.pdf{" "}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.73286 3.56445C6.73286 3.465 6.69335 3.36961 6.62302 3.29929C6.5527 3.22896 6.45732 3.18945 6.35786 3.18945H1.38086C1.08249 3.18945 0.796343 3.30798 0.585364 3.51896C0.374386 3.72994 0.255859 4.01608 0.255859 4.31445L0.255859 11.8145C0.255859 12.1128 0.374386 12.399 0.585364 12.6099C0.796343 12.8209 1.08249 12.9395 1.38086 12.9395H8.88086C9.17923 12.9395 9.46538 12.8209 9.67635 12.6099C9.88733 12.399 10.0059 12.1128 10.0059 11.8145V6.83745C10.0059 6.738 9.96635 6.64261 9.89602 6.57229C9.8257 6.50196 9.73032 6.46245 9.63086 6.46245C9.5314 6.46245 9.43602 6.50196 9.36569 6.57229C9.29537 6.64261 9.25586 6.738 9.25586 6.83745V11.8145C9.25586 11.9139 9.21635 12.0093 9.14602 12.0796C9.0757 12.1499 8.98032 12.1895 8.88086 12.1895H1.38086C1.2814 12.1895 1.18602 12.1499 1.11569 12.0796C1.04537 12.0093 1.00586 11.9139 1.00586 11.8145V4.31445C1.00586 4.215 1.04537 4.11961 1.11569 4.04929C1.18602 3.97896 1.2814 3.93945 1.38086 3.93945H6.35786C6.45732 3.93945 6.5527 3.89994 6.62302 3.82962C6.69335 3.75929 6.73286 3.66391 6.73286 3.56445Z"
                fill="#07B1FA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.2563 1.31445C12.2563 1.215 12.2168 1.11961 12.1465 1.04929C12.0762 0.978962 11.9808 0.939453 11.8813 0.939453H8.13133C8.03188 0.939453 7.93649 0.978962 7.86617 1.04929C7.79584 1.11961 7.75633 1.215 7.75633 1.31445C7.75633 1.41391 7.79584 1.50929 7.86617 1.57962C7.93649 1.64994 8.03188 1.68945 8.13133 1.68945H10.9761L4.86583 7.79895C4.83097 7.83382 4.80331 7.87521 4.78444 7.92077C4.76557 7.96632 4.75586 8.01515 4.75586 8.06445C4.75586 8.11376 4.76557 8.16259 4.78444 8.20814C4.80331 8.2537 4.83097 8.29509 4.86583 8.32995C4.9007 8.36482 4.94209 8.39248 4.98765 8.41135C5.0332 8.43021 5.08203 8.43993 5.13133 8.43993C5.18064 8.43993 5.22947 8.43021 5.27502 8.41135C5.32058 8.39248 5.36197 8.36482 5.39683 8.32995L11.5063 2.2197V5.06445C11.5063 5.16391 11.5458 5.25929 11.6162 5.32962C11.6865 5.39994 11.7819 5.43945 11.8813 5.43945C11.9808 5.43945 12.0762 5.39994 12.1465 5.32962C12.2168 5.25929 12.2563 5.16391 12.2563 5.06445V1.31445Z"
                fill="#07B1FA"
              />
            </svg>
          </div>
        </>
      ),
      duration: 1000,
    },
    // Add more states as needed
  ];

  useEffect(() => {
    if (states[stateIndex].duration) {
      const timer = setTimeout(() => {
        if (stateIndex === states.length - 1) {
          if (!addNextNodeCalled.current) {
            addNextNode();
            addNextNodeCalled.current = true;
          }
        } else {
          setStateIndex((prevIndex) => prevIndex + 1);
        }
      }, states[stateIndex].duration);

      return () => clearTimeout(timer);
    }
  }, [stateIndex, states, addNextNode]);

  return (
    <UseBlock label="Report" label_color="#87D4AB">
      {states[stateIndex].component}
    </UseBlock>
  );
};

export default Report;
