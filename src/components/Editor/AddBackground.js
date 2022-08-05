import { Box, Button, Container, Grid, Paper, styled } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
import ModalUploadFile from "/components/Common/ModalUploadFile";
import { useState } from "react";
import { setNestedObjectValues } from "formik";

function AddBackground({
                         onSuccess = (data) => {},
                         defaultValue = "",
                         readOnly = false,
                       }) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState(defaultValue);

  return (
    <Container>
      {url && <Box
        className="h-[300px] w-full rounded-xl -mb-[40px]"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          height: "200px",
          width: "100%",
          borderRadius: "0.75rem",
        }}
        component={Container}
      />}
      {!readOnly && <Box sx={{ display: "inline-flex" }}>
        {/*<Button size={'small'}>Outlined</Button>*/}
        <Button startIcon={<PhotoIcon />} size={"small"} sx={{ marginRight: 1 }} onClick={() => setOpen(true)}>Add
          cover</Button>
      </Box>}
      <ModalUploadFile visible={open} setVisible={setOpen} onSuccess={(data) => {
        onSuccess(data);
        setUrl(data?.display_url);
        console.log(url, "data");
        setOpen(false);
      }} />
    </Container>
  );
}

export default AddBackground;
