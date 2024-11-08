import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <h3>You might like</h3>
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="_alegomezs"
        name="Alejandro Gomez Santillan"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="midudev"
        name="Miguel Ángel Durán"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="anzawadaniel"
        name="Anzawa Daniel José"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="fabpot"
        name="Fabien Potencier"
      />
    </section>
  );
}
