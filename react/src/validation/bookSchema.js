import * as Yup from "yup";

export const bookSchema = Yup.object({
  title: Yup.string().trim().required("Book title is required"),
  author: Yup.string().trim().required("Author is required"),
  isbn: Yup.string()
    .matches(/^\d{10}(\d{3})?$/, "ISBN must be 10 or 13 digits")
    .required("ISBN is required"),
});
