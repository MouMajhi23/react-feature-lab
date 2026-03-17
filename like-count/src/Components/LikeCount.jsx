import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
const LikeCount = () => {
  const appBodyStyle = {
    display: "flex",
    backgroundColor: "#bbdaf0",
    ["align-items"]: "center",
    ["justify-content"]: "center",
    ["flex-direction"]: "column",
    ["min-height"]: "100vh",
  };
  const likeContainer = {
    display: "flex",
    gap: "4px",
    ["align-items"]: "center",
  };
  const btnStyle = {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    outline: "none",                                                                                                                                                                                                                   
                                                                
  }

  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(10);

  return (
    <div style={appBodyStyle}>
      <h2>Hello User!</h2>
      <div
        style={likeContainer} 
      >
        <button
          style={btnStyle}
          onClick={() => {
            if(liked)
                setCount(prev => prev - 1);
            else
                 setCount(prev => prev + 1);

          setLiked(!liked);
        }}
        >
          {liked ? (
            <AiFillHeart size={20} color="red" />
          ) : (
            <AiOutlineHeart size={20} />
          )}
        </button>
        {count}
      </div>
    </div>
  );
};
export default LikeCount;
