import React, { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  const [isFollowing, setIsFollowing] = useState(false);

  /*
  const users = [
    {
      userName: "_alegomezs",
      name: "Alejandro Gomez Santillan",
      isFollowing: true,
    },
  ];
  */

  return (
    <section className="App">
      <h3>You might like</h3>
      <TwitterFollowCard
        formatUserName={formatUserName}
        initialIsFollowing={isFollowing}
        userName="_alegomezs"
      >
        Alejandro Gomez Santillan
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="anzawadaniel"
      >
        Anzawa Daniel José
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName="fabpot">
        Fabien Potencier
      </TwitterFollowCard>
    </section>
  );
}
