import { Answer } from "./Answer";

export const Question = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Answer />
    </>
  );
};
