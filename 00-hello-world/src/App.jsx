import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <h3>You might like</h3>
      <TwitterFollowCard formatUserName={formatUserName} userName="_alegomezs">
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
