import React, { useState } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  ChevronDownCircleIcon,
  ChevronDownIcon,
  ChevronDownSquareIcon,
  ChevronLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/Config";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import ChangeImgModal from "./User/_components/ChangeImgModal";

const Profile = () => {
  const navigate = useNavigate();
  const [user, userLoading] = useAuthState(auth);

  const [userName, setUserName] = useState();



  const changeCourseFields = async (value) => {
    await updateProfile(auth.currentUser, {
      displayName: value
    })
  };

  return (
    <div>
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="py-2">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="py-2 px-2"
          >
            <ChevronLeft />
          </Button>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                  Update your profile information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    defaultValue={user?.displayName}
                    onChange={(e) => changeCourseFields(e.target.value)}
                    id="name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    defaultValue={user?.email}
                    readOnly
                    id="email"
                    type="email"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-5">
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <span>Change avatar</span>
                <ChangeImgModal />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="w-full justify-between"
                      variant="outline"
                    >
                      <span>Change password</span>
                      <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem>Change password</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="w-full justify-between"
                      variant="outline"
                    >
                      <span>Delete account</span>
                      <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem>Delete account</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      alt="@shadcn"
                      className="w-full h-full object-cover"
                      src={
                        user?.photoURL !== null
                          ? user?.photoURL
                          : "/placeholder-avatar.jpg"
                      }
                    />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5 text-sm">
                    <div className="font-medium">{user?.displayName}</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {user?.email}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
