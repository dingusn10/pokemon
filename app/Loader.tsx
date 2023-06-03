import Image from "next/image";
import load from "./load.svg"

export default function Loader() {
  return (
    <>
      <div className="m-auto">
        <Image 
        src={load}
        width={60}
          alt="Loading..."
          quality={100}
          priority={true}
        />
      </div>
    </>
  );
}
