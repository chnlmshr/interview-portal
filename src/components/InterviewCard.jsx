import React from "react";

export const InterviewCard = (props) => {
  return (
    <div className="card m-3" style={{ width: "14rem" }}>
      <div className="card-body">
        <h5 className="card-title pb-2">{props.interview.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.interview.date}
        </h6>
        <div className="card-text d-flex flex-column py-2">
          <div className="d-flex">
            <b>Start Time: </b>
            {props.interview.startTime}
          </div>
          <div>
            <b>End Time: </b>
            {props.interview.endTime}
          </div>
        </div>
        <div className="d-flex justify-content-between py-2">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => props.changeDetailsView(props.interview)}
          >
            Details
          </button>
          <a href="/update" className="btn btn-sm btn-secondary">
            Update
          </a>
        </div>
      </div>
    </div>
  );
};
