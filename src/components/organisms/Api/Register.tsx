import { SectionLayout } from "../../molecules/SectionLayout";
import { Formik } from "formik";
import styled from "styled-components";
import { useRegisterMutation } from "../../../generated/graphql";
import { toErrorMap } from "../../../utils/toErrorMap";
import { useRouter } from "next/router";

export const Register = () => {
  const [, register] = useRegisterMutation();
  const router = useRouter();
  return (
    <SectionLayout header="Register">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          const response = await register(values);
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register.user) {
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
            <button
              type="submit"
              disabled={isSubmitting}
              onSubmit={(e) => e.preventDefault()}
            >
              Submit
            </button>
            <button onClick={() => router.push("/test-api/login")}>
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
