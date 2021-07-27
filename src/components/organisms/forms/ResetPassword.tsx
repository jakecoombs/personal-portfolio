import { SectionLayout } from "../../molecules/SectionLayout";
import { Formik } from "formik";
import styled from "styled-components";
import { toErrorMap } from "../../../utils/toErrorMap";
import { ErrorText, getStyles } from "../../atoms/FieldInput";
import { useRouter } from "next/router";
import { useChangePasswordMutation } from "src/generated/graphql";
import React from "react";

export const ResetPassword = ({ token }: { token: string }) => {
  const [, changePassword] = useChangePasswordMutation();
  const [tokenError, setTokenError] = React.useState("");
  const router = useRouter();
  return (
    <SectionLayout header="Reset Password">
      <Formik
        initialValues={{ newPassword: "" }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          const response = await changePassword({
            newPassword: values.newPassword,
            token: token,
          });
          if (response.data?.changePassword.errors) {
            const errorMap = toErrorMap(response.data.changePassword.errors);
            if ("token" in errorMap) {
              setTokenError(errorMap.token);
            }
            setErrors(errorMap);
          } else if (response.data?.changePassword.user) {
            router.push("/login");
          }

          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <ErrorText>{tokenError && tokenError}</ErrorText>
            <input
              type="password"
              name="newPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newPassword}
              placeholder="New Password"
              style={getStyles(errors, "newPassword")}
            />
            <ErrorText>
              {errors.newPassword && touched.newPassword && errors.newPassword}
            </ErrorText>
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
    </SectionLayout>
  );
};

const StyledForm = styled.form`
  max-width: 300px;
`;
