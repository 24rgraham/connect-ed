import React from "react";

export default function Login() {
  return (
    <form>
      <div className="">
        <label for="InputEmail" className="form-label">
          Email Address
        </label>
        <input
          className="form-control"
          id="InputEmail"
          aria-describedby="emailHelp"
        ></input>
      </div>
      <div className="">
        <label for="InputPassword" className="form-label">
          Password
        </label>
        <input className="form-control" id="InputPassword"></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
