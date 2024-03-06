import Card from "./Card";
import CommentBox from "./CommentBox";
import { UsersContextApi } from "../../context/UserContext";
import { useContext } from "react";

const Cards = () => {
  const data = useContext(UsersContextApi);
  const users = data?.userData.payload;

  return (
    <>
      <main id="cards-container">
        {users &&
          users.map((e) => {
            if (e.role == "user") {
              return <Card prop={e} />;
            }
          })}
        <article className=" m-auto sticky bottom-10 left-[25%]">
          <CommentBox />
        </article>
      </main>
    </>
  );
};

export default Cards;
