import React, { useState } from "react";
import Users from "../Users/Users";
import DB from "../DB.json";
import "../search/searchUsersByBots.css";

let result = [];

const SearchUsers = () => {
  const [value, setValue] = useState(DB.users);

  const Search = (word) => {
    if (!word) {
      return setValue(DB.users);
    }

    result = DB.users.filter((user) =>
      user.name.toLowerCase().includes(word.toLowerCase())
    );
    setValue(result);
  };

  return (
    <>
      <p className="textForUsers">Введите пользователя:</p>
      <input
        className="search"
        placeholder="Search for user"
        onChange={(word) => Search(word.target.value)}
      />
      <Users users={value} />
    </>
  );
};
export default SearchUsers;
