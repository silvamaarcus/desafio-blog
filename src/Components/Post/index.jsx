import { useState } from "react";
import icon_like from "../../svg/icon-heart.svg";
import icon_like_active from "../../svg/icon-heart-active.svg";

const Post = (props) => {
  const [like, setLike] = useState(icon_like);

  const clickLike = () => {
    setLike((prevLike) =>
      prevLike === icon_like ? icon_like_active : icon_like
    );
  };

  return (
    <>
      <div className="card p-5 mb-5">
        <div className="flex-space">
          <p className="semi-bold color-primary">{props.date}</p>
          <img src={like} alt="" className="icon-s" onClick={clickLike} />
        </div>
        <h5 className="semi-bold my-2">{props.title}</h5>
        <p>{props.desc}</p>
      </div>
    </>
  );
};

export default Post;
