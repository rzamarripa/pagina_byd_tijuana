import Image from "next/image";
import { Vehicle } from "../../lib/types/index";
import Link from "next/link";

export const VehicleCard = ({
  vehicle,
  handleClose,
}: {
  vehicle: Vehicle;
  handleClose: () => void;
}) => (
  <Link
    key={vehicle.link}
    className="flex img:flex-col max-2xl:mt-3 gap-6 text-center px-2 items-center justify-start hover:bg-[#f5f5f5] cursor-pointer rounded transition-all duration-500"
    href={vehicle.link || "#"}
    onClick={handleClose}
  >
    <h3 className="hidden img:block img:w-[70%] 2xl:w-[80%] 3xl:w-[100%] font-bold text-base text-center pb-4">
      {vehicle.carName}
    </h3>
    <Image
      src={vehicle.carPicturePath}
      alt={vehicle.carName}
      width={400}
      height={400}
      className="w-[118px] sm:w-[246px] md:w-[160px] 2xl:w-[196px] 3xl:w-[172px] max-h-24 transition-transform duration-500 hover:scale-105"
      priority
      quality={65}
      placeholder="blur"
    />
    <p className="hidden img:block img:font-normal text-[10px] 2xl:text-[14px]">
      {vehicle.text}
    </p>
    <div className="img:hidden flex flex-col items-start justify-center">
      <h3 className="font-bold text-sm md:text-base text-center">
        {vehicle.carName}
      </h3>
      <p className="font-normal text-[10px] md:text-[14px] 2xl:text-[14px]">
        {vehicle.text}
      </p>
    </div>
  </Link>
);
