import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PlayerSidebar from "./_components/PlayerSidebar";
import Header from "../User/_components/Header";
import PlayerVideo from "./_components/PlayerVideo";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "@/firebase/Config";

const Player = () => {
  const courseId = useParams();

  const [course, loading] = useDocumentData(doc(db, "courses", courseId.id));
  const chapters = course?.chapters;
  const [chapterIndex, setChapterIndex] = useState(0);
  const watchVideo = course?.chapters[chapterIndex];
  return (
    <>
      <PlayerSidebar
        chapters={chapters}
        chapterIndex={chapterIndex}
        loading={loading}
        setChapterIndex={setChapterIndex}
      />
      <Header />
      <div className="pl-[23%]">
        <PlayerVideo watchVideo={watchVideo} loading={loading} />
      </div>
    </>
  );
};

export default Player;
