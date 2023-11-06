import { useEffect, useState } from "react";

function User() {
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getusers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    }
    getusers();
  }, []);

  function renderUsers() {
    if (loading) {
      return <p>Loading...</p>;
    }

    return Users.map((user) => (
      <div key={user.name}>
            <p>user ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Street: {user.address.street}</p>
            <p>Suite: {user.address.city}</p>
            <p>Zipcode: {user.address.zipcode}</p>
        <h2>.</h2>
      </div>
    ));
  }
}
export default User;
