import React from "react";
import PlayerVideoItems from "./PlayerVideoItems";
import { Link } from "react-router-dom";

const PlayerSidebar = ({
  chapters,
  loading,
  setChapterIndex,
  chapterIndex,
}) => {
  return (
    <div className="fixed left-0 bg-white border-r-[1px] border-r-[--border] w-[23%] h-full">
      <div className="h-[10vh] flex justify-center items-center space-y-2 w-full border-b-[1px] border-b-[--border]">
        <Link to="/">
          <img src="/public/logo.svg" width={150} alt="" />
        </Link>
      </div>
      <div>
        <PlayerVideoItems
          setChapterIndex={setChapterIndex}
          chapterIndex={chapterIndex}
          chapters={chapters}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default PlayerSidebar;
