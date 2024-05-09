import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { post } from '../api';

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
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setIsSubmitted(true);
        
      console.log(values);
      await post(values)
        
      resetForm();
      setSubmitting(false);
  }});

  const getFormikValidationErrorHandler = (formik) => (field) =>
    formik.touched[field] && formik.errors[field] ? (
      <div className="formError" data-testd="error-block">
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
        <textarea
          name="text"
          placeholder="Here should be your text"
          className="formInput"
          {...formik.getFieldProps("body")}
        />
        {handleValidationError("body")}

        <div className="formPublishBlock">
          <label htmlFor="publishStatus" className="formLabel">Should be published?</label>
          <input
            id="publishStatus"
            type="checkbox"
            {...formik.getFieldProps("published")}
            />
        </div>

        <div className="formBtnPlace">
          <button
            type="submit"
            className="buttons"
            data-testid="article-submit-btn"
          >Submit</button>
        </div>
      </form>
    </div>
  );
}

 
export default NewArticleForm;
