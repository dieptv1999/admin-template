import { Grid, Button, Stack, Typography, Modal } from "@mui/material";
import { faker } from "@faker-js/faker";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import SoftBox from "../../components/SoftBox";
import { CategoryCard } from "./components";
import Iconify from "../../components/Common/Iconify";
import React, { useRef } from "react";
import { styled } from "@mui/material/styles";
import { Form, Formik } from "formik";
import SoftTypography from "../../components/SoftTypography";
import SoftInput from "../../components/SoftInput";
import ErrorLabelInput from "../../components/SoftInput/ErrorLabelInput";
import SoftButton from "../../components/SoftButton";
import UploadDropzone from "../../components/Common/UploadDropzone";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions/category";
import useNotification from "../../hooks/useNotification";

// ----------------------------------------------------------------------

const POST_TITLES = [
  "Whiteboard Templates By Industry Leaders",
  "Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!",
  "Designify Agency Landing Page Design",
  "✨What is Done is Done ✨",
  "Fresh Prince",
  "Six Socks Studio",
  "vincenzo de cotiis’ crossing over showcases a research on contamination",
  "Simple, Great Looking Animations in Your Project | Video Tutorial",
  "40 Free Serif Fonts for Digital Designers",
  "Examining the Evolution of the Typical Web Design Client",
  "Katie Griffin loves making that homey art",
  "The American Dream retold through mid-century railroad graphics",
  "Illustration System Design",
  "CarZio-Delivery Driver App SignIn/SignUp",
  "How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna",
  "Tylko Organise effortlessly -3D & Motion Design",
  "RAYO ?? A expanded visual arts festival identity",
  "Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover",
  "Inside the Mind of Samuel Day",
  "Portfolio Review: Is This Portfolio Too Creative?",
  "Akkers van Margraten",
  "Gradient Ticket icon",
  "Here’s a Dyson motorcycle concept that doesn’t ‘suck’!",
  "How to Animate a SVG with border-image",
];

const POSTS = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/static/mock-images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  },
}));

const CreateCateStyle = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: 8,
  border: "none",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  // bgcolor: 'background.paper',
  boxShadow: 24,
  padding: 16,
}));

// ----------------------------------------------------------------------

export default function Categories() {
  const [open, setOpen] = React.useState(false);
  const [openUpload, setOpenUpload] = React.useState(false);
  const { showNotificationAction } = useNotification();
  const ref = useRef();

  const dispatch = useDispatch();

  function isImage(url) {
    return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }

  Yup.addMethod(Yup.string, "checkImageUrl", function(errorMessage) {
    // @ts-ignore
    return this.test("checkImageUrl", errorMessage, function(value) {
      // @ts-ignore
      const { path, createError } = this;

      return (
        isImage(value) ||
        createError({ path, message: errorMessage })
      );
    });
  });

  const CategorySchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Must be at least 8 characters")
      .max(30, "Must be less  than 30 characters")
      .required("Name is required"),
    description: Yup.string()
      .min(50, "Must be at least 50 characters")
      .max(2000, "Must be less  than 2000 characters")
      .required("Description is required"),
    background: Yup.string()
      .checkImageUrl("Invalid Image"),
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenUpload = () => {
    setOpenUpload(true);
  };
  const handleCloseUpload = () => {
    setOpenUpload(false);
  };

  const createCategory = (values) => {
    dispatch(actions.createCategoryAction(values, () => {
      showNotificationAction("Create category successful");
    }));
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button variant="contained" onClick={handleOpen} startIcon={<Iconify icon="eva:plus-fill" />}>
            New Category
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <CategoryCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </SoftBox>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title-cate"
        aria-describedby="modal-modal-description-cate"
      >
        <CreateCateStyle>
          <Formik
            initialValues={{ name: "", description: "", background: "" }}
            validationSchema={CategorySchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
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
                getFieldProps,
              }) => (
              <Form onSubmit={handleSubmit}>
                <SoftBox mb={2}>
                  <SoftTypography>Upload Image</SoftTypography>
                  <UploadDropzone ref={ref} />
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftBox mb={1} ml={0.5}>
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Name
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput
                    type="name"
                    name="name"
                    placeholder="Name"
                    {...getFieldProps("name")}
                    error={Boolean(touched.name && errors.name)}
                  />
                  <ErrorLabelInput variant="body2">{touched.name && errors.name}</ErrorLabelInput>
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftBox mb={1} ml={0.5}>
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Description
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput
                    placeholder="Description"
                    name="description"
                    {...getFieldProps("description")}
                    error={Boolean(touched.description && errors.description)}
                  />
                  <ErrorLabelInput variant="body2">{touched.description && errors.description}</ErrorLabelInput>
                </SoftBox>
                <SoftBox mt={4} mb={1}>
                  <SoftButton variant="gradient" color="info" fullWidth type="submit" disabled={isSubmitting}>
                    create
                  </SoftButton>
                </SoftBox>
              </Form>
            )}
          </Formik>
        </CreateCateStyle>
      </Modal>
    </DashboardLayout>
  );
}
