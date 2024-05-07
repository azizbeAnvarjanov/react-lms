import PlauerSodebarSkeleton from "@/Skeletons/PlauerSodebarSkeleton";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CirclePause, CirclePlay } from "lucide-react";
import React, { useState } from "react";

const PlayerVideoItems = ({
  chapters,
  loading,
  setChapterIndex,
  chapterIndex,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handel = (i) => {
    setChapterIndex(i);
    setIsActive(i);
  };

  return (
    <div className="overflow-y-scroll h-[80vh] flex flex-col">
      {loading ? (
        <PlauerSodebarSkeleton />
      ) : (
        <>
          {chapters.map((chapter, i) => (
            <Button
              key={i}
              onClick={() => handel(i)}
              variant="outline"
              className={`rounded-none w-full flex items-center justify-start py-7 border-[1px] border-t-0 border-x-0 text-[--text] font-[400] gap-2 items-center ${
                isActive === i ? "bg-green-200 text-green-500" : ""
              }`}
            >
              {chapterIndex === i ? (
                <CirclePause size={18} />
              ) : (
                <CirclePlay size={18} />
              )}
              {}
              {chapter.chapterName}
            </Button>
          ))}
        </>
      )}
    </div>
  );
};

export default PlayerVideoItems;
