import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from 'react-icons/bs'

export default function Header() {
  return (
    <div>
      <div className="flex">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsInfoCircleFill} />

      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  );
}