import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const deadlineDate = new Date(taskObj.deadline);
  const distance = formatDistanceToNow(deadlineDate, {
    locale: tr,
    addSuffix: true,
  });
  const accentClass =
    differenceInDays(deadlineDate, new Date()) <= 3
      ? "bg-tbUrgent"
      : "bg-tbNormal";

  return (
    <div className="p-6 bg-white rounded-md leading-normal mt-4 shadow-[0_4px_5px_-0px_rgba(0,0,0,0.1)]  ">
      <h3 className=" text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim:{" "}
        <span className={`${accentClass} px-2 py-1 rounded-sm inline-block `}>
          {distance}
        </span>
      </div>
      <p className="pt-2 pb-3 text-[#444] text-sm">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block px-3 py-1.25 text-lg border-solid border-[#ccc] border-[1px] mr-1 mb-1.5 rounded-[30px]"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block px-3 py-2 ml-auto bg-[#fecc91] shadow-[0_4px_5px_-0px_rgba(0,0,0,0.05)] rounded-sm border-0 cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
