import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/firebase/Config";
import AllCoursesSkeleton from "@/Skeletons/AllCoursesSkeleton";

const AllCourses = () => {
  const [courses, loadin, error] = useCollectionData(collection(db, "courses"));
  const activeCourses = courses?.filter(
    (course) => course.status === "published"
  );
  console.log(activeCourses);
  if (loadin) {
    return <AllCoursesSkeleton />;
  }

  return (
    <div className="grid grid-cols-4 gap-4 scroll-ms p-5">
      {activeCourses?.map((course, i) => (
        <div key={course.id}>
          <Card className="border-[1px] border-[--border] shadow-none overflow-hidden rounded-lg">
            <Link to={`/course/${course.id}`}>
              <div className="w-full h-[22vh] relative">
                <img
                  className="object-cover w-full h-full"
                  src={course.banner}
                  alt="5"
                />
              </div>
            </Link>
            <CardContent className="p-4">
              <CardTitle className="font-[600] text-[1.2em]">
                <Link to={`/course/12`} className="capitalize">
                  {course.courseName}
                </Link>
                <p className="text-sm mt-2 text-black font-medium">
                  <strong>Author:</strong> {course.author}
                </p>
              </CardTitle>
            </CardContent>
            <CardFooter className="px-4 flex flex-col justify-start items-start space-y-2">
              <p className="py-1 px-3 bg-[#e6f6fd] text-[12px] rounded-md text-[#075985] font-[600] flex items-center">
                {" "}
                <BookOpen size={15} className="mr-1" /> {course.chapters.length}{" "}
                chapters
              </p>
              <div className="flex flex-wrap gap-2">
                {course?.tags?.map((tag) => (
                  <Badge
                    key={tag.id}
                    variant="outline"
                    className="border-[1px] border-[--border]"
                  >
                    {tag.tagName}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default AllCourses;
