import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import actions from "../../../redux/actions/user";
import Switch from "@mui/material/Switch";
import * as Yup from "yup";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import curved9 from "assets/images/curved-images/curve-7.png";
import { Form, FormikProvider, useFormik } from "formik";
import { useDispatch } from "react-redux";
import ErrorLabelInput from "../../../components/SoftInput/ErrorLabelInput";
import Iconify from "../../../components/Common/Iconify";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Must be at least 8 characters")
      .max(20, "Must be less  than 20 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(4, "Must be at least 8 characters")
      .max(20, "Must be less  than 20 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(actions.login({
        "username": values?.username,
        "password": values?.password,
      }, () => {
        setTimeout(() => navigate("/dashboard/app", { replace: true }), 500);
      }));
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Username
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type="username"
              name="username"
              placeholder="Email"
              {...getFieldProps("username")}
              error={Boolean(touched.username && errors.username)}
            />
            <ErrorLabelInput variant="body2">{touched.username && errors.username}</ErrorLabelInput>
          </SoftBox>
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Password
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              icon={{
                component: <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                                    onClick={() => handleShowPassword()} />,
                direction: "right",
              }}
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
            />
            <ErrorLabelInput variant="body2">{touched.password && errors.password}</ErrorLabelInput>
          </SoftBox>
          <SoftBox display="flex" alignItems="center">
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            <SoftTypography
              variant="button"
              fontWeight="regular"
              onClick={handleSetRememberMe}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              &nbsp;&nbsp;Remember me
            </SoftTypography>
          </SoftBox>
          <SoftBox mt={4} mb={1}>
            <SoftButton variant="gradient" color="info" fullWidth type="submit" loading={isSubmitting}>
              sign in
            </SoftButton>
          </SoftBox>
          <SoftBox mt={3} textAlign="center">
            <SoftTypography variant="button" color="text" fontWeight="regular">
              Don&apos;t have an account?{" "}
              <SoftTypography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Sign up
              </SoftTypography>
            </SoftTypography>
          </SoftBox>
        </Form>
      </FormikProvider>
    </CoverLayout>
  );
}

export default SignIn;
