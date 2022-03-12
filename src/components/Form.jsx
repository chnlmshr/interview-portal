import React, { useState, useEffect } from "react";

export const Form = (props) => {
  const [state, setState] = useState(props.currentState);
  const [participants, setParticipants] = useState(props.allParticipants);
  const roles = { INTERVIEWER: "INTERVIEWER", INTERVIEWEE: "INTERVIEWEE" };
  const handleOnChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    let formdata = { ...state, interviewees: [], interviewers: [] };
    for (let i = 0; i < state.interviewees.length; i++) {
      formdata.interviewees.push(state.interviewees[i]._id);
    }
    for (let i = 0; i < state.interviewers.length; i++) {
      formdata.interviewers.push(state.interviewers[i]._id);
    }
    props.handleOnSubmit(formdata);
  };

  const addParticipant = (role, participantEmail) => {
    if (role === roles.INTERVIEWEE) {
      let allInterviewees = participants.interviewees;
      let participant = false;
      for (let i = 0; i < allInterviewees.length; i++)
        if (allInterviewees[i].email === participantEmail)
          participant = allInterviewees[i];
      if (!participant) return;
      let interviewees = state.interviewees;
      interviewees.push(participant);
      allInterviewees.splice(participants.interviewees.indexOf(participant), 1);
      setParticipants({ ...participants, interviewees: allInterviewees });
      setState({ ...state, interviewees: interviewees });
    } else if (role === roles.INTERVIEWER) {
      let allInterviewers = participants.interviewers;
      let participant = false;
      for (let i = 0; i < allInterviewers.length; i++)
        if (allInterviewers[i].email === participantEmail)
          participant = allInterviewers[i];
      if (!participant) return;
      let interviewers = state.interviewers;
      interviewers.push(participant);
      allInterviewers.splice(participants.interviewers.indexOf(participant), 1);
      setParticipants({ ...participants, interviewers: allInterviewers });
      setState({ ...state, interviewers: interviewers });
    }
  };

  const removeParticipant = (role, participant) => {
    if (role === roles.INTERVIEWEE) {
      let allInterviewees = participants.interviewees;
      let interviewees = state.interviewees;
      allInterviewees.push(participant);
      interviewees.splice(state.interviewees.indexOf(participant), 1);
      setParticipants({ ...participants, interviewees: allInterviewees });
      setState({ ...state, interviewees: interviewees });
    } else if (role === roles.INTERVIEWER) {
      let allInterviewers = participants.interviewers;
      let interviewers = state.interviewers;
      allInterviewers.push(participant);
      interviewers.splice(state.interviewers.indexOf(participant), 1);
      setParticipants({ ...participants, interviewers: allInterviewers });
      setState({ ...state, interviewers: interviewers });
    }
  };

  useEffect(() => {
    setState(props.currentState);
    setParticipants(props.allParticipants);
  }, [props]);

  return (
    <form className="p-3 mt-5 pt-5" onSubmit={handleOnSubmit}>
      <h5 className="pb-3">{props.action} an Interview</h5>
      <div className="form-group py-2">
        <input
          type="text"
          className="form-control"
          name="name"
          value={state.name}
          onChange={handleOnChange}
          placeholder="Interview Name"
          required
        />
      </div>
      <div className="form-group py-2">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">Date</div>
          </div>
          <input
            type="date"
            className="form-control"
            name="date"
            id="date"
            value={state.date}
            onChange={handleOnChange}
            required
          />
        </div>
      </div>
      <div className="form-group py-2">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">Start Time</div>
          </div>
          <input
            type="time"
            className="form-control"
            name="startTime"
            id="startTime"
            value={state.startTime}
            onChange={handleOnChange}
            placeholder="Start Time"
            required
          />
        </div>
      </div>
      <div className="form-group py-2">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">End Time</div>
          </div>
          <input
            type="time"
            className="form-control"
            name="endTime"
            id="endTime"
            value={state.endTime}
            onChange={handleOnChange}
            placeholder="End Time"
            required
          />
        </div>
      </div>
      <div className="border rounded my-2">
        <div className="d-flex flex-wrap">
          {state.interviewers?.map((interviewer, key) => (
            <div key={key} className="border rounded d-flex px-1 mx-1 my-2">
              {interviewer.email}
              <button
                className="btn p-0 mx-2 border-0 bh-white text-danger"
                onClick={(event) => {
                  event.preventDefault();
                  removeParticipant(roles.INTERVIEWER, interviewer);
                }}
              >
                <b>x</b>
              </button>
            </div>
          ))}
        </div>
        <div className="input-group">
          <select
            name="interviewers"
            className="form-select"
            onChange={(event) => {
              addParticipant(roles.INTERVIEWER, event.target.value);
              event.target.value = "Participants";
            }}
          >
            <option value="Participants">Add Interviewers</option>
            {participants.interviewers?.map((interviewer, key) => (
              <option value={interviewer.email} key={key}>
                {interviewer.name} | {interviewer.email}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="border rounded my-2">
        <div className="d-flex flex-wrap">
          {state.interviewees?.map((interviewee, key) => (
            <div key={key} className="border rounded d-flex px-1 mx-1 my-2">
              {interviewee.email}
              <button
                className="btn p-0 mx-2 border-0 bh-white text-danger"
                onClick={(event) => {
                  event.preventDefault();
                  removeParticipant(roles.INTERVIEWEE, interviewee);
                }}
              >
                <b>x</b>
              </button>
            </div>
          ))}
        </div>
        <div className="input-group">
          <select
            name="interviewees"
            className="form-select"
            onChange={(event) => {
              addParticipant(roles.INTERVIEWEE, event.target.value);
              event.target.value = "Participants";
            }}
          >
            <option value="Participants">Add Interviewees</option>
            {participants.interviewees?.map((interviewee, key) => (
              <option value={interviewee.email} key={key}>
                {interviewee.name} | {interviewee.email}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group py-2">
        {/* <small id="error" className="form-text">
      {state.errorMessage}
    </small> */}
      </div>
      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary">
          {props.action}
        </button>
        <button
          className="btn btn-danger"
          onClick={(event) => {
            event.preventDefault();
            props.handleDiscard(props.currentState._id);
          }}
        >
          Discard
        </button>
      </div>
    </form>
  );
};
