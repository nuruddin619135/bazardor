import Image from "next/image";
import logo from "@/assets/logo-icon.png";

export default function Logo() {
  return (
    <div>
      <Image src={logo} alt="Bazardor" width="100" height="100" />
    </div>
  );
}
