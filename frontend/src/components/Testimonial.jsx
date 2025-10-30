import React from "react";
import CommentSlider from "../common/commentSlider";
import { testimonialsData } from "../../data/siteData";

const Testimonial = () => {
  const { title, comments } = testimonialsData;

  return (
    <section className="">
      <CommentSlider title={title} comments={comments} />
    </section>
  );
};

export default Testimonial;
