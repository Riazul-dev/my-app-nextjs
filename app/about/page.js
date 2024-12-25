import Image from "next/image";
import React from "react";
import aboutImage from "@/public/images/work_1.png";

function About() {
  return (
    <div className="min-h-[70vh]">
      <h1>This is About page.</h1>
      <div className="w-[200px]">
        <Image src={aboutImage} alt="image" placeholder="blur" />
      </div>
    </div>
  );
}

export default About;
