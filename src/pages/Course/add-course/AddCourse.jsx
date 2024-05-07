import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { ChevronLeft, CircleX, PlusIcon, UploadCloud } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              size="icon"
              className="h-7 w-7"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Course name
            </h1>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Course</Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-0" className="border-none">
                <CardHeader>
                  <CardTitle>Course Details</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        className="w-full"
                        placeholder="Gamer Gear Pro Controller"
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                        className="min-h-32"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-07-chunk-0" className="border-none">
                <CardHeader>
                  <CardTitle>Course chapters</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 py-4">
                    <Input type="text" placeholder="Chapter Name" />
                    <Input type="text" placeholder="Chapter Video Link" />
                    <Button>
                      <PlusIcon size={18} />
                    </Button>
                  </div>
                  <>
                    <div>
                      <div className="border-[--border] border-[1px] rounded-md pl-4 flex items-center py-4 justify-between mb-3">
                        Chapter:
                      </div>
                    </div>
                  </>
                </CardContent>
              </Card>
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-3">
                <CardHeader>
                  <CardTitle>Course tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid items-center gap-4">
                    <form>
                      <Input placeholder="write tags" />
                    </form>
                  </div>
                  <div className="flex flex-wrap py-2 gap-2">
                    <>
                      <Badge>
                        React Js
                        <CircleX size={15} className="ml-2" />
                      </Badge>
                    </>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
                <CardHeader>
                  <CardTitle>Course Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="">
                    <div className="w-full h-[20vh] relative overflow-hidden rounded-md mb-2">
                      <img
                        alt="Course image"
                        className="object-cover w-full h-full"
                        src="/placeholder.svg"
                      />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-4">
                      <div className="group relative flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-white px-6 py-10 text-center transition-colors hover:border-gray-400 dark:border-gray-600 dark:bg-gray-950">
                        <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                          <UploadCloud className="mx-auto h-8 w-8" />
                          <div>
                            <span className="font-medium text-gray-900 dark:text-gray-50">
                              Drag and drop
                            </span>
                            {" \n                  "}or
                            <span className="font-medium text-gray-900 dark:text-gray-50">
                              click to upload
                            </span>
                          </div>
                          <p className="text-xs">PNG, JPG, GIF up to 10MB</p>
                        </div>
                        <Input
                          className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                          id="file-upload"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm">Save Course</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddCourse;
