import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function NewArticleForm() {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = {
    title: "",
    body: "",
    published: false,
  };

  const validationSchema = Yup.object({
    title: Yup.string().matches(/^[A-Za-z ]*$/, "Only alphabets are allowed for this field ").required("Required"),
    body: Yup.string().required("Body is required"),
    published: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
        setIsSubmitted(true);
        
        console.log(values);
        
      resetForm();
      // axios POST
      setTimeout(() => setSubmitting(false), 1000);
  }});

  const getFormikValidationErrorHandler = (formik) => (field) =>
    formik.touched[field] && formik.errors[field] ? (
      <div className="formError" data-testId="error-block">
        <span className="">{formik.errors[field]}</span>
      </div>
    ) : null;


  const handleValidationError = getFormikValidationErrorHandler(formik);

  return (
    <div className="formWrapper">
      <h3 className="formNotice">
        {isSubmitted
          ? "Thank you! Article is added successfully!"
          : "Here you can add new article"}
      </h3>
      <form onSubmit={formik.handleSubmit} className="formContainer">
        <label htmlFor="firstName" className="formLabel">Title</label>
        <input
          title="title"
          placeholder="Place for title"
          className="formInput"   
          {...formik.getFieldProps("title")}
        />
        {handleValidationError("title")}

        <label htmlFor="text" className="formLabel">Enter text here</label>
        <input
          name="text"
          placeholder="Here should be your text"
          className="formInput"
          type="textarea"
          {...formik.getFieldProps("body")}
        />
        {handleValidationError("body")}

        <label htmlFor="publishStatus" className="formLabel">Should be published?</label>
        <input
          name="publishStatus"
          className="formInput"
          type="checkbox"
          {...formik.getFieldProps("published")}
        />

        <div className="formBtnPlace">
          <button
            type="submit"
            className="buttons"
            data-testId="article-submit-btn"
          >Submit</button>
        </div>
      </form>
    </div>
  );
}

 
export default NewArticleForm;
