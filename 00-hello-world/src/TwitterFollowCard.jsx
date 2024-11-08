export function TwitterFollowCard({
  formatUserName,
  userName,
  name,
  isFollowing,
}) {
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
            <strong>{name}</strong>
          </a>
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Follow</button>
      </aside>
    </article>
  );
}
