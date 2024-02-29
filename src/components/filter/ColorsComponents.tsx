import { AddColor } from "@/redux/features/colorsSlice/ColorsSlice";
import { ColorInterface, Colors } from "@/utility/filterItem";
import { useDispatch, useSelector } from "react-redux";

const ColorsComponents = () => {
  const dispatch = useDispatch();

  const { colors } = useSelector((state: any) => state.Colors);

  return (
    <div>
      <div className="flex items-center flex-wrap gap-7 ">
        {Colors?.map((color: ColorInterface, i: number) => {
          const isColor = colors.find((item: number) => item == color.id);

          return (
            <div
              onClick={() => dispatch(AddColor(color?.id))}
              key={i}
              className=" group"
            >
              <div
                className={` ${
                  isColor && "border"
                } group-hover:border  w-[70px]  flex justify-center items-center   h-[70px]  border-[#000000e4] rounded-xl `}
              >
                <div
                  className={` w-[70px] group-hover:h-[60px]  group-hover:w-[60px] duration-300 ${color?.color_code}   h-[70px]   rounded-xl cursor-pointer transform `}
                ></div>
              </div>
              <h1 className="text-center text-[18px] py-1">{color?.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorsComponents;
