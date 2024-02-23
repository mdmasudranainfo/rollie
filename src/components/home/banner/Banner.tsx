import CursorDesign from "@/components/utilityComponent/cursorDesign/CursorDesign";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="-mt-56 relative  overflow-hidden h-[120vh]">
      <div className=" relative  h-full">
        <Image
          className=" hidden md:block   object-cover   object-center  relative h-full w-full"
          src="https://www.rollienation.com/cdn/shop/files/HP-General-D_2000x.jpg?v=1706488195"
          width={1000}
          height={1000}
          alt=""
        />
        <Image
          className=" relative h-full  object-fill md:hidden w-full"
          src="https://www.rollienation.com/cdn/shop/files/HP-General-M_750x@2x.jpg?v=1706488218"
          width={500}
          height={500}
          alt=""
        />

        <div className=" text-white absolute  z-10 top-1/2 px-4 xl:px-20 max-w-[570px]">
          <p className="text-[14px] md:text-[17px]   uppercase tracking-[3px] "> pre-autumn  Collactions </p>
          <h1 className="text-[24px] md:text-[42px] py-1 font-bold">AII Day Comfort</h1>
          <p className="text-[15px] md:text-[20px] font-medium ">{"Meet out latast Women.s & Men's styls packed with innovative tech for life-allerning confort, every step og the day"} </p>
        </div>
        <CursorDesign></CursorDesign>
      </div>
    </div>
  );
};

export default Banner;
