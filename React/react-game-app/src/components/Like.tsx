import { useState } from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

interface LikesProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikesProps) => {
  const [status, setStatus] = useState(true);

  const toggler = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <FaHeart color="red" size={100} onClick={toggler} />;
  return <FaHeartBroken color="red" size={100} onClick={toggler} />;
};

export default Like;
