import getUser from "../apis/getUser";
import { useState, useEffect } from "react";
import User from "./User";
import "./UserContainer.css";
import Loading from "./Loading";

const UserContainer = () => {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pagination, setPagination] = useState({
    previous: true,
    next: false,
  });

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true); 
      setError(false);
      try {
        const userData = await getUser(id);
        setUser(userData);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  useEffect(() => {
    setPagination({
      previous: id <= 1,
      next: id >= 10,
    });
  }, [id]);

  const clickHandler = (change) => {
    setId((prevId) => (change === "previous" ? prevId - 1 : prevId + 1));
  };

  return (
    <div className="container">
      {loading && <Loading />}
      {error && <div>Error</div>}
      {user && !loading && !error && <User user={user} />}
      <div>
        <button
          onClick={() => clickHandler("previous")}
          disabled={pagination.previous}
        >
          Previous
        </button>
        <button onClick={() => clickHandler("next")} disabled={pagination.next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UserContainer;
