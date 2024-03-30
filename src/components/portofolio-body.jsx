import React from "react";
import EliteBibble from "../assets/elite-bibble.svg";
import Helicam from "../assets/helicam-bali.svg";
import TimbulMekar from "../assets/timbul-mekar.svg";
import Image from "next/image";

export default function PortofolioBody() {
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 p-20">
        <div className="shadow-lg p-20 m-20 rounded-lg flex items-center flex-col hover:bg-gradient-to-t from-[#E73900] to-white col-span-2">
          <h4>Timbul Mekar</h4>
          <Image src={TimbulMekar} alt="timbul-mekar" />
        </div>
        <h2 className="text-[#D64923] flex items-center">
          behold the convergence of artistry and technology
        </h2>
      </div>
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 p-40">
        <div className="shadow-lg w-full p-10 rounded-lg flex items-center flex-col hover:bg-gradient-to-t from-[#E73900] to-white transition transition-colors">
          <h4>Elite Bibble</h4>
          <Image src={EliteBibble} alt="elite-bibble" />
        </div>
        <div className="shadow-lg w-full p-10 rounded-lg flex items-center flex-col hover:bg-gradient-to-t from-[#E73900] to-white">
          <h4>Helicam Bali</h4>
          <Image src={Helicam} alt="Helicam" />
        </div>
      </div>
      <h2 className="text-[#D64923] text-center ">
        behold the convergence of artistry and technology
      </h2>
      <div className="shadow-lg p-20 m-40 rounded-lg flex items-center flex-col hover:bg-gradient-to-t from-[#E73900] to-white">
        <h4>Kori Barak Films</h4>
        <Image src={Helicam} alt="Helicam" />
      </div>
    </div>
  );
}
