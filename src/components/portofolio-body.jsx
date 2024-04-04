import React from "react";
import Image from "next/image";
import EliteBibble from "../assets/elite-bibble.svg";
import Helicam from "../assets/helicam-bali.svg";
import TimbulMekar from "../assets/timbul-mekar.svg";
import KoribarakFilm from "../assets/koribarak-film.svg";
import BaliArthaJaya from "../assets/artha.png";
import { cn, useImgLoading } from "../utils/hooks/useImgLoading";

function ImageCard({ src, alt = "" }) {
  const [isLoading, setNotLoading, setLoading] = useImgLoading();
  return (
    <Image
      src={src}
      alt={alt ?? "portofolio"}
      className={cn(
        "duration-700 ease-in-out",
        isLoading ? "blur-sm scale-110" : "blur-0 scale-100"
      )}
      onLoadingComplete={setNotLoading}
    />
  );
}

export default function PortofolioBody() {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 p-10 lg:p-40 gap-5">
        <div className="shadow p-10 rounded-lg flex items-center flex-col hover:bg-gradient-to-t from-[#E73900] to-white">
          <h4>Timbul Mekar</h4>
          <ImageCard src={TimbulMekar} alt="timbul-mekar" />
          <h4 className="text-white mt-2">Website Company</h4>
        </div>
        <h2 className="text-[#D64923] flex items-center xl:text-6xl pl-5">
          behold the convergence of artistry and technology
        </h2>
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 gap-4 p-10 lg:px-40">
        <div className="shadow w-full p-10 rounded-lg flex items-center flex-col hover:bg-gradient-to-t from-[#E73900] to-white">
          <h4>Elite Bibble</h4>
          <ImageCard src={EliteBibble} alt="elite-bibble" />
          <h4 className="text-white mt-2">Website App</h4>
        </div>
        <div className="shadow w-full p-10 rounded-lg flex items-center flex-col hover:bg-gradient-to-t from-[#E73900] to-white">
          <h4>Helicam Bali</h4>
          <ImageCard src={Helicam} alt="Helicam" />
          <h4 className="text-white mt-2">Website App</h4>
        </div>
      </div>
      <h2 className="text-[#D64923] text-center my-20 lg:my-32 xl:text-6xl">
        Digital Dreams, Real Result
      </h2>
      <div className="shadow p-10 m-10 lg:mx-40 rounded-lg flex items-center flex-col hover:bg-gradient-to-t from-[#E73900] to-white">
        <h4>Kori Barak Films</h4>
        <ImageCard src={KoribarakFilm} alt="KoribarakFilm" />
        <h4 className="text-white mt-2">Website Company</h4>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 p-10 lg:p-40 gap-5">
        <h2 className="text-[#D64923] flex items-center xl:text-6xl pl-5">
          embody creativity, functionality, and excellence
        </h2>
        <div className="shadow p-10 rounded-lg flex items-center flex-col hover:bg-gradient-to-t from-[#E73900] to-white">
          <h4>Bali Artha Jaya</h4>
          <ImageCard src={BaliArthaJaya} alt="BaliArthaJaya" />
          <h4 className="text-white mt-2">E-Commerce Web</h4>
        </div>
      </div>
    </div>
  );
}
