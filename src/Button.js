import styled from "styled-components";

const Button = ({className, children}) => (
  <button className={className}>{children}</button>
)

const MyButton = styled(Button)`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid rebeccapurple;
  border-radius: 3px;
`;

export default MyButton;
