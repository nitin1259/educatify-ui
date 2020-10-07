import React, { Component } from "react";
import ReactQuill from "react-quill";
// import ImageResize from "quill-image-resize-module";
import "react-quill/dist/quill.snow.css";
import "./Blog.css";

// ReactQuill.register("modules/imageResize", ImageResize);

export default class CreateBlog extends Component {
  constructor(props) {
    super();
    this.state = {
      article: {
        title: "",
        content: "",
        createdAt: new Date(),
        isPublished: false,
      },
    };
  }

  modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
      ["code-block"],
    ],
  };

  formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "clean",
    "code-block",
  ];

  onChangeArticleTitle = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        title: value,
      },
    });
  };

  onChangeContentTitle = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        content: value,
      },
    });
  };

  render() {
    return (
      <div className="createblog">
        <h2 className="createblog__title">Write a new blog...</h2>
        <input
          type="text"
          name="title"
          placeholder="Title of the blog"
          id="title"
          value={this.state.article.title}
          onChange={(e) => {
            this.onChangeArticleTitle(e.target.value);
          }}
        />
        <br />
        <div className="text-editor">
          <ReactQuill
            theme="snow"
            modules={this.modules}
            formats={this.formats}
            onChange={(e) => {
              this.onChangeContentTitle(e);
            }}
          ></ReactQuill>
        </div>
        <div className="createblog__buttons">
          <button
            onClick={(e) => {
              console.log(this.state);
            }}
          >
            Published
          </button>
        </div>
      </div>
    );
  }
}
