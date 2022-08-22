import React from "react";

import { createReactEditorJS } from "react-editor-js";

import { EDITOR_JS_TOOLS } from "../../utils/tools";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import SoftBox from "../SoftBox";
import Header from "./Header";
import Page from "../Common/Page";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useSoftUIController } from "../../context";
import SoftInput from "../SoftInput";

const ReactEditorJS = createReactEditorJS();

export default function ReactEditor() {
  const [controller] = useSoftUIController();
  const { sidenavColor } = controller;

  function submitPost() {}


  function submitButton(){
    return (
    <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="7rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={submitPost}
    >
      <CheckCircleOutlineIcon color={sidenavColor} fontStyle={40} sx={{width: 50,}}/>
    </SoftBox>
  )};

    return (
      <DashboardLayout>
        <Header />
        <Page sx={{flexDirection: 'row', justifyContent: 'center', display: 'flex'}}>
          <SoftBox mx={5} mt={3} sx={{maxWidth: 768, width: '100%'}}>
            <SoftInput placeholder={'United'} size={'large'} sx={{marginBottom: '10px', border: 'none', backgroundColor: 'transparent', '& input': {fontSize: 28, fontWeight: '600', height: '1.6em'}}}></SoftInput>
            <ReactEditorJS
              tools={EDITOR_JS_TOOLS}
              defaultValue={{
                time: 1635603431943,
                blocks: [
                  // {
                  //   id: "sheNwCUP5A",
                  //   type: "header",
                  //   data: {
                  //     text: "Editor.js",
                  //     level: 2,
                  //   },
                  // },
                  {
                    id: "12iM3lqzcm",
                    type: "paragraph",
                    data: {
                      text: "",
                    },
                  },
                ],
              }}
            />
          </SoftBox>
        </Page>
        {submitButton()}
      </DashboardLayout>
    );
}
