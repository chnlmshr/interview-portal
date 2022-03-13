import React from "react";
export const InterviewDetails = ({
  id,
  name,
  date,
  startTime,
  endTime,
  interviewers,
  interviewees,
}) => {
  return (
    <div className="positon-sticky my-3 mx-2 p-2 border rounded shadow">
      <div className="d-flex justify-content-between mb-2">
        <b>{name}</b> <span>{date?.split("T")[0]}</span>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <b>Start Time</b>{" "}
        <span>{startTime?.split("T")[1]?.split(":00")[0]}</span>
      </div>
      <div className="d-flex justify-content-between my-2">
        <b>End Time</b> <span>{endTime?.split("T")[1]?.split(":00")[0]}</span>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-6 pl-3">
          <b className="text-wrap">Interviewers</b>
          {interviewers?.map((interviewer, key) => (
            <div
              key={key}
              className={`py-2 px-1 rounded ${key % 2 ? "bg-light " : ""}`}
            >
              <div className="text-wrap text-break">{interviewer.name}</div>
              <div className="text-wrap text-break">{interviewer.email}</div>
            </div>
          ))}
        </div>
        <div className="col-md-6 pr-3">
          <b>Interviewees</b>
          {interviewees?.map((interviewee, key) => (
            <div
              key={key}
              className={`py-2 px-1 rounded ${key % 2 ? "bg-light " : ""}`}
            >
              <div className="text-wrap text-break">{interviewee.name}</div>
              <div className="text-wrap text-break">{interviewee.email}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
