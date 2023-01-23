import React from "react";
import { useSelector } from "react-redux";
import { Card, CardHeader, Text, CardBody } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  handleDecrease,
  handleIncrease,
} from "../features/BlogSlice/BlogSlice";
import { selectedBlogs } from "../features/BlogSlice/BlogSlice";
const Post = () => {
  const blog = useSelector(selectedBlogs);
  const { id } = blog;
  const dispatch = useDispatch();

  return (
    <div style={{ marginLeft: "40rem" }} className="res">
      <div>
        {blog.map((e) => {
          return (
            <Card className="card" variant="elevated">
              <h1 style={{ fontSize: "1.5rem", paddingLeft: "1rem" }}>
                {e.title}
              </h1>
              <CardBody>
                <Text sx={{ mb: "1rem" }}>{e.body}</Text>
                <Text pt="2" fontSize="sm" mb="2rem">
                  <div style={{ display: "flex" }}>
                    ~<h1 style={{ fontSize: "1rem" }}>{e.author}</h1>
                  </div>
                </Text>
                <span style={{ marginRight: "1rem" }}>
                  <button onClick={() => dispatch(handleIncrease(e.id))}>
                    👍 {e.thumpsUp}
                  </button>
                </span>
                <span>
                  <button onClick={() => dispatch(handleDecrease(e.id))}>
                    {" "}
                    👎 {e.thumpsDown}
                  </button>
                </span>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
