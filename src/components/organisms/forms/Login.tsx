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
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          const response = await login(values);
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user) {
            router.push("/_api");
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
              name="usernameOrEmail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.usernameOrEmail}
              placeholder="Username or Email"
              style={getStyles(errors, "usernameOrEmail")}
            />
            <ErrorText>
              {errors.usernameOrEmail &&
                touched.usernameOrEmail &&
                errors.usernameOrEmail}
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
              <NextLink href="/register">Register</NextLink>
            </button>
            <button>
              <NextLink href="/change-password">Forgotten Password</NextLink>
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
