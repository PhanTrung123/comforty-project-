import React from "react";
import CommentSlider from "../common/commentSlider";

const Testimonial = () => {
  const comments = [
    {
      id: 1,
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
      avatar: "/image/User_01.png",
      name: "Kristin Watson",
      position: "Fashion Designer",
    },
    {
      id: 2,
      description:
        "Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum. ",
      avatar: "/image/User_02.png",
      name: "Esther Howard",
      position: "Fashion Designer",
    },
    {
      id: 3,
      description:
        "“Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.”",
      avatar: "/image/User_01.png",
      name: "Robert Fox",
      position: "Interior Designer",
    },
  ];

  return (
    <section className="">
      <CommentSlider title="What client says about us" comments={comments} />
    </section>
  );
};

export default Testimonial;
