import  { useState } from 'react';



import React from "react";
import Headline from "./Headline";
import Container from "./Container";
import orange from "../assets/orange.png";
import vector2 from "../assets/vector2.png";
import vector from "../assets/Vector.png";
import Line from "./Line";

const Inter = () => {

  const [active, setActive] = useState(1);


  return (
    <>
      <section className="bg-back py-40 px-5">
        <Container>
          <center>
            <h3 className="text-indigo font-sora font-semibold uppercase text-center text-[12px]">
Behind the Pixels            </h3>
            <Headline
              head="MY Background and
Achievements"
              className="w-[535.5px] mt-5 text-[45px] font-semibold leading-13.5  uppercase text-center "
            />
          </center>
          <div className="text-white  bg-indigo flex w-125 py-3 px-5 mt-10 gap-x-5 rounded-4xl  mx-auto   ">
            <button  onClick={() => setActive(1)} className={`cursor-pointer px-6.25 py-3 rounded-3xl ${
  active === 1 ? "bg-black text-white font-bold" : "bg-indigo text-white  font-bold"
}`}>
              Exprerience
            </button>
            <button  onClick={() => setActive(2)} className={`cursor-pointer px-6.25 py-3 rounded-3xl ${
  active === 2 ? "bg-black text-white font-bold" : "bg-indigo text-white  font-bold"
}`} >
              Development
            </button>
            <button  onClick={() => setActive(3)} className={`cursor-pointer px-6.25 py-3 rounded-3xl ${
  active === 3 ? "bg-black text-white font-bold" : "bg-indigo text-white  font-bold"
}`}>
              Awards
            </button>
          </div>
          {/* Another Part */}


       

     {active === 1 && (
           <div className="border-2 border-white/30 p-15  rounded-4xl mt-15">
            <Line
              pic={orange}
              hline="Senior Product Designer"
              sline="VirtusLab"
              pera="I'm winner of the world's most prestigious web designthat has more-
or-less normal awards in the fields."
              vector={vector}
              date="2022 - 2023"
              customClass="bg-gray-500"
            />
            <Line
              pic={orange}
              hline="Senior Product Designer"
              sline="VirtusLab"
              pera="I'm winner of the world's most prestigious web designthat has more-
or-less normal awards in the fields."
              vector={vector}
              date="2022 - 2023"
                            customClass="bg-gray-500 "

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
      )}

  {active === 2 && (
        <div className="bg-green-500 p-10">
          This is Div 2
        </div>
      )}

      {active === 3 && (
        <div className="bg-blue-500 p-10">
          This is Div 3
        </div>
      )}


        </Container>
      </section>
    </>
  );
};

export default Inter;
