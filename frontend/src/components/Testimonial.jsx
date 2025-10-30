import React from "react";
import CommentSlider from "../common/commentSlider";

const Testimonial = ({ testimonials }) => {
  const { title, comments } = testimonials;

  return (
    <section className="">
      <CommentSlider title={title} comments={comments} />
    </section>
  );
};

export default Testimonial;
