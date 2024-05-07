import React from "react";

import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddUserModal = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Plus size={18} className="mr-2" />
            Add User
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Add New user</DialogTitle>
            <DialogDescription>
              Fill out the form below to create a new course.
            </DialogDescription>
          </DialogHeader>
          <form className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">User Name</Label>
              <Input id="name" placeholder="Enter course name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">User Email</Label>
              <Input id="name" placeholder="Enter course name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">User Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter course name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">User Role</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full mt-3" type="submit">
              Create User
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddUserModal;
