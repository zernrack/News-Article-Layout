import React from "react";

function Badges(props) {
  return (
    <>
      <div className="container-badges flex justify-end">
        <span className="bg-green-100 text-green-800 text-md font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-100 dark:text-green-500 border-solid border-[1px] border-green-400">
          {props.text}
        </span>
      </div>
    </>
  );
}

export default Badges;
