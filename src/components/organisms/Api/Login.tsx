import { SectionLayout } from "../../molecules/SectionLayout";
import { Formik } from "formik";
import styled from "styled-components";
import { useLoginMutation } from "../../../generated/graphql";
import { toErrorMap } from "../../../utils/toErrorMap";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { ErrorText, getStyles } from "../../atoms/FieldInput";

export const Login = () => {
  const [, login] = useLoginMutation();
  const router = useRouter();
  return (
    <SectionLayout header="Login">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          const response = await login(values);
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user) {
            router.push("/test-api");
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
            <input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              placeholder="Username"
              style={getStyles(errors, "username")}
            />
            <ErrorText>
              {errors.username && touched.username && errors.username}
            </ErrorText>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Password"
              style={getStyles(errors, "password")}
            />
            <ErrorText>
              {errors.password && touched.password && errors.password}
            </ErrorText>
            <button
              type="submit"
              disabled={isSubmitting}
              onSubmit={(e) => e.preventDefault()}
            >
              Submit
            </button>
            <button>
              <NextLink href="/test-api/register">Register</NextLink>
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
