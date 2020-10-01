import React, { useState } from "react";
import { Typography, Button, Form, message } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import QuillEditor from "../editor/QuillEditor";

const { Title } = Typography;

function CreateBlog() {
  // const user = useSelector((state) => state.user);
  const [content, setContent] = useState("initialState");

  const onEditorChange = () => {};
  const onFilesChange = () => {};

  const onSubmit = (event) => {
    event.preventDefault();
    // if (user.userData && !user.userData.isAuth) {
    //   return alert("Please Log in first!!!");
    // }

    const param = {
      content: content,
      //    userId: user.userData.id,
    };

    console.log(param);
    // axios.post("api/blog/createPost", param);
    setContent("");
  };
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <Title level={2}> Editor</Title>
      </div>
      <QuillEditor
        placeholder={"Start Posting Something"}
        onEditorChange={onEditorChange}
        onFilesChange={onFilesChange}
      />

      <Form onSubmit={onSubmit}>
        <div style={{ textAlign: "center", margin: "2rem" }}>
          <Button
            size="large"
            htmlType="submit"
            className=""
            onSubmit={onSubmit}
          >
            Publish
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateBlog;
