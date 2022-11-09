import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name:yup.string().required("Required"),
  companyName:yup.string().required("Required"),
  companyEmail: yup.string().email("Please enter a valid email"),
  staff:yup.string().required("Required"),
  chooseCb: yup.bool().oneOf([true], "You should agree").required('Checkbox selection is required'),
  phone:yup.string().required("Required"),
});