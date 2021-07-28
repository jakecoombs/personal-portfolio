import { Formik } from "formik";
import React from "react";
import { useForgotPasswordMutation } from "src/generated/graphql";
import styled from "styled-components";
import { ErrorText } from "../../atoms/FieldInput";
import { SectionLayout } from "../../molecules/SectionLayout";

export const ForgotPassword = () => {
  const [, forgotPassword] = useForgotPasswordMutation();
  const [error, setError] = React.useState("");
  const [sent, setSent] = React.useState(false);
  return (
    <SectionLayout header="Reset Password">
      {sent ? (
        <h3>An email has been sent to reset your password</h3>
      ) : (
        <Formik
          initialValues={{ email: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            const response = await forgotPassword(values);
            if (!response.data?.forgotPassword) {
              setError("Unable to change password");
            } else {
              setSent(true);
            }
            setSubmitting(false);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <StyledForm onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
              />
              <ErrorText>{error && error}</ErrorText>
              <button
                type="submit"
                disabled={isSubmitting}
                onSubmit={(e) => e.preventDefault()}
              >
                Submit
              </button>
            </StyledForm>
          )}
        </Formik>
      )}
    </SectionLayout>
  );
};

const StyledForm = styled.form`
  max-width: 300px;
`;
