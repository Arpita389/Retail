import React, { useEffect, useState } from "react";
import "./admin.css";
function AdminPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleDeleteUser = (username) => {
    fetch(`http://localhost:5000/api/users/${username}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setUsers(users.filter((user) => user.username !== username));
        } else {
          throw new Error("User deletion failed");
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div id="parent-admin">
      <h1>Admin Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            ({user.username})
            <button id="admin-button" onClick={() => handleDeleteUser(user.username)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPage;
