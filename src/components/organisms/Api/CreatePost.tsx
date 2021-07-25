import { SectionLayout } from "../../molecules/SectionLayout";
import { useMutation } from "urql";
import { Formik } from "formik";

const SUBMIT_POST_MUT = `
mutation Mutation($email: String!, $title: String!) {
    createPost(email: $email, title: $title) {
      id
      title
      email
    }
  }
`;

export const CreatePost = () => {
  const [, create] = useMutation(SUBMIT_POST_MUT);
  return (
    <SectionLayout header="Add a Post here">
      <Formik
        initialValues={{ title: "", email: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (values.title.length <= 2) {
            errors.title = "Title must be longer than 2 characters";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await create(values);
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email"
            />
            {errors.email && touched.email && errors.email}
            <input
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              placeholder="Title"
            />
            {errors.title && touched.title && errors.title}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </SectionLayout>
  );
};
