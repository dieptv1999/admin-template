// import ProgressBar from "@uppy/progress-bar";
import "@uppy/core/dist/style.css";
import "@uppy/drag-drop/dist/style.css";
import Uppy from "@uppy/core";
import { DragDrop } from "@uppy/react";
import utils from "../../utils";
import { Box, styled } from "@mui/material";
import SoftTypography from "../SoftTypography";
import XHRUpload from "@uppy/xhr-upload";
import { BASE_URL } from "../../utils/constant";

const XHR_ENDPOINT = `${BASE_URL}/upload`;

const StyledDragDrop = styled(DragDrop)`
  .uppy-DragDrop-label {
    color: red;
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 2,
};

// eslint-disable-next-line react/prop-types
function UploadUppy({ title = "" }) {

  const uppy = new Uppy({
    id: "drag-drop-1",
    meta: { type: "avatar" },
    restrictions: {
      maxTotalFileSize: utils.megabytes(25),
      maxNumberOfFiles: 2,
    },
    autoProceed: true,
  });
  uppy.on("file-added", (file) => {
    console.log("Added file", file);
    uppy.setFileMeta(file.id, {
      size: file.size,
    })
  });
  uppy.use(XHRUpload, {
    endpoint: XHR_ENDPOINT,
    limit: 1,
    bundle: true,
    formData: true,
    fieldName: "file",
    method: "post",
    metaFields: ['size'],
  });
  uppy.on('upload-success', (file, response) => {
    const httpStatus = response.status // HTTP status code
    const httpBody = response.body   // extracted response data
    console.log(
      httpBody,
      httpStatus,
    )
    // do something with file and response
  })
  uppy.on("complete", (result) => {
    if (result.failed.length === 0) {
      console.log("Upload successful üòÄ");
    } else {
      console.warn("Upload failed üòû");
    }
    console.log("successful files:", result.successful);
    console.log("failed files:", result.failed);
  });

  return (
    <Box sx={style}>
      {title && <SoftTypography variant={"h2"}>{title}</SoftTypography>}
      <StyledDragDrop
        id={"drag-drop-1"}
        uppy={uppy}
        locale={{
          strings: {
            dropHereOr: "Drop here or %{browse}",
            browse: "select from your computer",
          },
        }}
      />
      {/*<h2>Files added so far</h2>*/}
      {/*<ul>*/}
      {/*  {uppy.getFiles().map((file, index) => {*/}
      {/*    return (*/}
      {/*      <UploadCard*/}
      {/*        key={`${file.name}_${index}`}*/}
      {/*        fileSize={file.size}*/}
      {/*        handleRemoveClick={() => uppy.removeFile(file.id)}*/}
      {/*        name={file.id}*/}
      {/*      />*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</ul>*/}
    </Box>
  );
}

export default UploadUppy;