
import { BsInstagram, BsFacebook, BsPinterest, BsGoogle } from "react-icons/bs";
const Socials = ({size}) => {
  return (
    <div className="centerd p-5 space-x-7">
          <BsInstagram  size={size} />
          <BsFacebook size={size}  />
          <BsPinterest size={size}  />
          <BsGoogle  size={size} />
    </div>
  )
}

export default Socials
