import styled from "@emotion/styled";

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-weight: 500;
`;

const Input = styled.input`
  display: block;
  margin-top: 5px;
  line-height: 15px;
  border: none;
  border-radius: 6px;
  outline: red;
  &:focus {
    border: 1px dashed black;
    background-color: tomato;
  }
  &::placeholder {
    text-align: center;
    color: black;
  }
`;
export { Input, Label };
