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

const Submit = styled.input`
  font-weight: 500;
  margin-top: 10px;
  border-radius: 6px;
  border: none;
  background-color: orange;
`;

const FormS = styled.form`
  padding: 15px;
  border: 1px solid black;
`;

export { Label, Input, Submit, FormS };
