import { useState } from "react";

export function TwitterFollowCard({
  children,
  formatUserName,
  userName,
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Following" : "Follow";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="user-avatar"
          src={`https://unavatar.io/x/${userName}`}
        />
        <div className="tw-followCard-info">
          <a className="tw-followCard-name" href={`https://x.com/${userName}`}>
            <strong>{children}</strong>
          </a>
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-follow">{text}</span>
          <span className="tw-followCard-unFollow">Unfollow</span>
        </button>
      </aside>
    </article>
  );
}
