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
    <div className="position-fixed my-3 mx-2 p-2 border rounded shadow">
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
        <div className="col-md-6 text-truncate pl-3">
          <b>Interviewers</b>
          {interviewers?.map((interviewer, key) => (
            <div
              key={key}
              className={`py-2 px-1 rounded text-truncate ${
                key % 2 ? "bg-light " : ""
              }`}
            >
              <div>{interviewer.name}</div>
              <div>{interviewer.email}</div>
            </div>
          ))}
        </div>
        <div className="col-md-6 text-truncate pr-3">
          <b>Interviewees</b>
          {interviewees?.map((interviewee, key) => (
            <div
              key={key}
              className={`py-2 px-1 text-truncate rounded ${
                key % 2 ? "bg-light " : ""
              }`}
            >
              <div>{interviewee.name}</div>
              <div>{interviewee.email}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
