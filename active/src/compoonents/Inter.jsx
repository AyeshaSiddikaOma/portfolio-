import React from "react";
import Headline from "./Headline";
import Container from "./Container";
import orange from "../assets/orange.png";
import vector2 from "../assets/vector2.png";
import vector from "../assets/Vector.png";
import Line from "./Line";
const Inter = () => {
  return (
    <>
      <section className="bg-back py-40 px-5">
        <Container>
          <center>
            <h3 className="text-indigo font-sora font-semibold uppercase text-center text-[12px]">
              My Recent Work
            </h3>
            <Headline
              head="MY Background and
Achievements"
              className="w-[535.5px] mt-5 text-[45px] font-semibold leading-13.5  uppercase text-center "
            />
          </center>
          <div className="text-white  bg-indigo flex w-[500px] py-3 px-5 mt-10 gap-x-5 rounded-4xl  mx-auto   ">
            <button className=" cursor-pointer  px-6.25 py-3 bg-black rounded-3xl font-bold font-sora text-[15px]">
              Exprerience
            </button>
            <button className=" cursor-pointer  px-6.25 py-3 bg-black rounded-3xl font-bold font-sora text-[15px]">
              Development
            </button>
            <button className=" cursor-pointer  px-6.25 py-3 bg-black rounded-3xl font-bold font-sora text-[15px]">
              Awards
            </button>
          </div>
          {/* Another Part */}
          <div className="border-2 border-white/30 p-15  rounded-4xl mt-15">
            <Line
              pic={orange}
              hline="Senior Product Designer"
              sline="VirtusLab"
              pera="I'm winner of the world's most prestigious web designthat has more-
or-less normal awards in the fields."
              vector={vector}
              date="2022 - 2023"
            />
            <Line
              pic={vector2}
              hline="Senior Product Designer"
              sline="VirtusLab"
              pera="I'm winner of the world's most prestigious web designthat has more-
or-less normal awards in the fields."
              vector={vector}
              date="2022 - 2023"
            />
            <Line
              pic={orange}
              hline="Senior Product Designer"
              sline="VirtusLab"
              pera="I'm winner of the world's most prestigious web designthat has more-
or-less normal awards in the fields."
              vector={vector}
              date="2022 - 2023"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Inter;
