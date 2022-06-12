import FeedCard from "../components/FeedCard";
import classes from "./pages.module.css";

const Feed = ({ feedsData }) => {
  return (
    <div className={classes.feedsBody}>
      <h3
        style={{textAlign:'center'}}
      >FEED</h3>
      {!!feedsData.length && feedsData.map((feed) => <FeedCard data={feed} />)}
    </div>
  );
};
export default Feed;
