import { Divider, Drawer, Modal, Typography } from "antd";
import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="my-5 sm:hidden">
        <LuMenu className="hover:cursor-pointer" onClick={() => setOpen(true)}/>
      </div>
      <Drawer width={"100%"} open={open} onClose={() => setOpen(false)}>
        <div className=" my-5 gap-x-2   pb-4 flex flex-col">
          <Typography.Text className="hover:cursor-pointer text-orange-600">
            Home
          </Typography.Text>
          <Typography.Text className="hover:cursor-pointer">
            About
          </Typography.Text>
        </div>
      </Drawer>
      <div className="sm:flex  my-5 gap-x-2 hidden border-b pb-4">
        <Typography.Text className="hover:cursor-pointer text-orange-600">
          Home
        </Typography.Text>
        <Typography.Text className="hover:cursor-pointer">
          About
        </Typography.Text>
      </div>
      {/* <Divider /> */}
    </div>
  );
};

export default NavBar;
