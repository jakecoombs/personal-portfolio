import { SectionLayout } from "../../molecules/SectionLayout";
import { useMutation } from "urql";
import { Formik } from "formik";
import styled from "styled-components";

const LOGIN_MUT = `
mutation Mutation($password: String!, $username: String!) {
    login(password: $password, username: $username) {
      errors {
        field
        message
      }
      user {
        id
        username
      }
    }
  }
  
`;

export const Login = () => {
  const [, login] = useMutation(LOGIN_MUT);
  return (
    <SectionLayout header="Login here">
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.username) {
            errors.username = "Required";
          } else if (values.username.length <= 2) {
            errors.username = "Username must be longer than 2 characters";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log("Submitted");
          await login(values);
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
            />
            {errors.username && touched.username && errors.username}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Password"
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Login
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
