import { useState } from "react";
import { Comment } from "../components/Comment";

export function Index() {
  const [tweets, setTweets] = useState([
    "Tweet 1",
    "Tweet 2",
    "Tweet 3",
    "Tweet 4",
  ]);

  function createTweet() {
    setTweets([...tweets, "Tweet 5"]);
  }

  return (
    <>
      {tweets.map((tweet) => {
        return <Comment text={tweet} />;
      })}
      <button
        onClick={createTweet}
        style={{
          backgroundColor: "#8257E6",
          border: 0,
          padding: "6px 12px",
          color: "#f9f9f9",
        }}
      >
        Add tweet
      </button>
    </>
  );
}
