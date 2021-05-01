import React from "react";
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
} from "../icons/Icon";

const Sidebar = () => {
  return (
    <div className="w-72 bg-blue-200">
      <h1>Sidebar</h1>
      <HomeIcon />
      <ExploreIcon />
      <NotificationsIcon />
      <MessagesIcon />
      <BookmarksIcon />
      <ListsIcon />
      <ProfileIcon />
      <MoreIcon />
    </div>
  );
};

export default Sidebar;
