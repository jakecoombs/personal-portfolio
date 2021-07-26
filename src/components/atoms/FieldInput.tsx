import { FormikErrors, getIn } from "formik";
import styled from "styled-components";

export const getStyles = (errors: FormikErrors<any>, fieldName: string) => {
  if (getIn(errors, fieldName)) {
    return {
      outline: "none !important",
      "border-color": "red",
      "box-shadow": "0 0 10px red",
    };
  }
  return;
};

export const ErrorText = styled.div`
  color: red;
`;
