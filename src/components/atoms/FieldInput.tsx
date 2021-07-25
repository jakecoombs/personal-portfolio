import React, { FC } from "react";
import {
  Field,
  FieldAttributes,
  FormikErrors,
  FormikTouched,
  getIn,
} from "formik";
import styled from "styled-components";

function getStyles(errors: FormikErrors<any>, fieldName: string) {
  if (getIn(errors, fieldName)) {
    return {
      outline: "none !important",
      "border-color": "red",
      "box-shadow": "0 0 10px red",
    };
  }
}

interface CustomInputProps {
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}

export const FieldInput: FC<CustomInputProps & FieldAttributes<any>> = ({
  name,
  errors,
  touched,
  type = "text",
  ...props
}) => (
  <>
    <Field type={type} style={getStyles(errors, name)} {...props} />
    {touched[name] && errors[name] && <ErrorText>{errors[name]}</ErrorText>}
  </>
);

const ErrorText = styled.div`
  color: red;
`;
