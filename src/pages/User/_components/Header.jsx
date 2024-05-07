import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogIn } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { auth } from "@/firebase/Config";
import UserSkeleton from "@/Skeletons/UserSkeleton";

const Header = () => {
  const navigate = useNavigate();
  const [signOut] = useSignOut(auth);
  const [user, userloading] = useAuthState(auth);
  const photoUrl = user?.photoURL;

  const logOut = async () => {
    await signOut().then(() => {
      toast.success("User logouted !");
    });
  };

  return (
    <div>
      <div className="h-[10vh] w-full navbar flex items-center justify-end py-2 px-4 lg:px-10 border-b-[1px] border-[--border] bg-white lg:pl-[19%]">
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => navigate("/admin")}>
            Admin
          </Button>
          <Button variant="outline" onClick={() => navigate("/teacher")}>
            Teacher mode
          </Button>
          {user && (
            <Button onClick={logOut} variant="outline">
              <LogIn size={14} className="mr-1" /> logout
            </Button>
          )}
          {userloading ? (
            <>
              <UserSkeleton />
            </>
          ) : (
            <>
              {user ? (
                <>
                  <DropdownMenu className="z-50 drop">
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="overflow-hidden rounded-full relative"
                      >
                        <img
                          src={
                            photoUrl !== null ? photoUrl : "/placeholder.svg"
                          }
                          alt="Avatar"
                          className="overflow-hidden w-full h-full rounded-full object-cover"
                        />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => navigate("/profile")}
                        className="cursor-pointer"
                      >
                        My Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>Support</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  <Button onClick={() => navigate("/login")} variant="outline">
                    Login
                  </Button>
                  <Button onClick={() => navigate("/register")}>
                    {" "}
                    Register
                  </Button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
