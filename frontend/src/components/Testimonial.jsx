import React from "react";
import CommentSlider from "../common/commentSlider";

const Testimonial = () => {
  const comments = [
    {
      id: 1,
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem.”",
      avatar: "/user1.png",
      name: "Kristin Watson",
      position: "Fashion Designer",
    },
    {
      id: 2,
      description:
        "“Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac.”",
      avatar: "/user2.png",
      name: "Esther Howard",
      position: "Fashion Designer",
    },
    {
      id: 3,
      description:
        "“Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.”",
      avatar: "/user1.png",
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
