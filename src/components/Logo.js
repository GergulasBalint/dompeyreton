import Image from "next/image";
import SVGIMG from "../../public/Gites_Logo_RGB.svg";

const Logo = () => {
  return (
    <Image
      src={SVGIMG}
      alt={"Dompeyreton Logo"}
      style={{ height: "125px", width: "auto", marginBottom: "1.5rem" }}
    />
  );
};

export default Logo;
