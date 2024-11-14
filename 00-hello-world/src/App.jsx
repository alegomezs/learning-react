import React, { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const [isFollowing, setIsFollowing] = useState(false);
  const formatUserName = (userName) => `@${userName}`;
  const users = [
    {
      userName: "_alegomezs",
      name: "Alejandro Gomez Santillan",
      isFollowing: false,
    },
    {
      userName: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: false,
    },
    {
      userName: "anzawadaniel",
      name: "Anzawa Daniel José",
      isFollowing: false,
    },
    {
      userName: "fabpot",
      name: "Fabien Potencier",
      isFollowing: false,
    },
  ];

  return (
    <section className="App">
      <h3>You might like</h3>
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            formatUserName={formatUserName}
            initialIsFollowing={isFollowing}
            userName={userName}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
