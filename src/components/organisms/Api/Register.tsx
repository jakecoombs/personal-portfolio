import { SectionLayout } from "../../molecules/SectionLayout";
import { Formik } from "formik";
import styled from "styled-components";
import { useRegisterMutation } from "../../../generated/graphql";
import { toErrorMap } from "../../../utils/toErrorMap";
import { useRouter } from "next/router";
import { ErrorText, getStyles } from "../../atoms/FieldInput";
import NextLink from "next/link";

export const Register = () => {
  const [, register] = useRegisterMutation();
  const router = useRouter();
  return (
    <SectionLayout header="Register">
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          const response = await register({ options: values });
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register.user) {
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
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email"
              style={getStyles(errors, "email")}
            />
            <ErrorText>
              {errors.email && touched.email && errors.email}
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
              <NextLink href="/_api/login">Login</NextLink>
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
