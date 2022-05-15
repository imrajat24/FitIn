export const Card = ({ url, heading, tags }) => {
  // so that only unique tags will be rendered in the UI
  const uniqueTags = [...new Set(tags)];

  return (
    <>
      <div className="card">
        <div className="card_video">
          <video src={url} controls preload="none"></video>
        </div>
        <div className="card_heading">
          <h3>{heading}</h3>
        </div>
        <div className="card_tags">
          {uniqueTags.map((data) => (
            <span>{data}</span>
          ))}
        </div>
      </div>
    </>
  );
};
