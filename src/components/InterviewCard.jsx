import React from "react";
import { Link } from "react-router-dom";

export const InterviewCard = (props) => {
  return (
    <div className="card m-3" style={{ width: "14rem" }}>
      <div className="card-body">
        <h5 className="card-title pb-2">{props.interview.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.interview.date.split("T")[0]}
        </h6>
        <div className="card-text d-flex flex-column py-2">
          <div className="d-flex">
            <b>Start Time: </b>
            {props.interview.startTime?.split("T")[1]?.split(":00.000Z")[0]}
          </div>
          <div>
            <b>End Time: </b>
            {props.interview.endTime?.split("T")[1]?.split(":00.000Z")[0]}
          </div>
        </div>
        <div className="d-flex justify-content-between py-2">
          <a
            href="#top"
            className="btn btn-sm btn-primary"
            onClick={() => props.changeDetailsView(props.interview)}
          >
            Details
          </a>
          <Link
            to={`/update/${props.interview._id}`}
            className="btn btn-sm btn-secondary"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};
