import React from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [usersdata, setUsersdata] = useState();
  const [singlebookdetails, setSinglebookdetails] = useState()

  useEffect(() => {
    fetch("/books-list")
      .then((res) => res.json())
      .then((data) => setUsersdata(data));
  }, []);

  console.log(usersdata);

  return (
    <>
      <div>
        {usersdata?.users?.map((e) => {
          return (
            <p>
              {e?.name}
            </p>
          )
        })}
      </div>
    </>
  );
};

export default App;
