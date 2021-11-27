import React from "react";

export const About = () => {
  let myStyle = {
    minHeight: "52.5vh",
    margin: "60px auto",
  };
  return (
    <div className="container" style={myStyle}>
      <h3>This is an About Component</h3>
      <p className="my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        accusantium perferendis expedita corporis in, enim commodi numquam ad,
        rerum facere aut cum doloribus, soluta id veniam sed hic quaerat
        repellat! Adipisci laudantium minima eaque id iure culpa, nemo inventore
        placeat sunt, aliquid repellendus accusantium ex esse sint nostrum ipsam
        aliquam!
      </p>
    </div>
  );
};
