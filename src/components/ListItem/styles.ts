import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
  display: flex;
  background-color: #330868;
  padding: 0.6rem;
  border-radius: 0.6rem;
  margin-bottom: 0.6rem;
  align-items: center;

  input {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.3rem;
  }

  label {
    color: #ccc;
    font-size: 1.3rem;
    text-transform: capitalize;
    text-decoration: ${done ? "line-through" : "initial"};
  }
`
);
