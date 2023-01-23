import React from "react";
import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { addBlog } from "./BlogSlice";
import { useDispatch } from "react-redux";
import Post from "../../component/Post";
const BlogApp = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author && title && body) {
      dispatch(
        addBlog({
          author,
          title,
          body,
        })
      );
    }

    setAuthor("");
    setBody("");
    setTitle("");
  };

  return (
    <Box bg="gray" w="auto" h="auto" p={4} color="white" className="box">
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        className="main-div"
      >
        <form className="form" style={{ position: "fixed", left: "8%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2rem",
            }}
          >
            <h1>BLOG APP</h1>
          </div>
          <div style={{ marginTop: "3rem" }}>
            AUTHOR:
            <input
              style={{
                color: "black",
                marginLeft: "1rem",
                border: "none",
                outline: "none",
                width: "70%",
                borderRadius: "1rem",
                paddingTop: "0.4rem",
                paddingLeft: "0.3rem",
                paddingBottom: "0.4rem",
              }}
              type="text"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />{" "}
            <br />
            <div style={{ marginTop: "3rem" }}>
              TITLE :
              <input
                style={{
                  color: "black",
                  border: "none",
                  outline: "none",
                  width: "70%",
                  borderRadius: "1rem",
                  paddingTop: "0.4rem",
                  marginLeft: "2rem",
                  paddingLeft: "0.3rem",
                  paddingBottom: "0.4rem",
                }}
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div>
              <div style={{ display: "flex", marginTop: "1rem" }}>
                <h3 style={{ marginRight: "2rem", marginTop: "4rem" }}>
                  BODY :{" "}
                </h3>
                <textarea
                  className="text-area"
                  value={body}
                  onChange={(e) => {
                    setBody(e.target.value);
                  }}
                  cols="32"
                  rows="5"
                  style={{
                    // marginLeft: "3rem",
                    // marginTop: "4rem",
                    paddingLeft: "0.3rem",
                    paddingTop: "0.4rem",
                    marginTop: "2rem",
                    border: "none",
                    outline: "none",
                    color: "black",
                    borderRadius: "1rem",
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <Button
            className="btn"
            onClick={(e) => {
              handleSubmit(e);
            }}
            color="white.500"
            bg="blue.300"
            sx={{
              ml: "5.3rem",
              mt: "6rem",
              width: "70%",
              //   paddingLeft: "40% ",
              //   paddingRight: "40%",
            }}
          >
            SUBMIT
          </Button>
        </form>
        <div>
          <Post />
        </div>
      </div>
    </Box>
  );
};

export default BlogApp;
