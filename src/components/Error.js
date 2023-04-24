import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      Something Error in Your Route
      <h3>
        {" "}
        Error is {err.data} and status code is {err.status}
      </h3>
    </div>
  );
};

export default Error;
