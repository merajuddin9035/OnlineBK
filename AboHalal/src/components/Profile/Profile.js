import React, { useState, useEffect } from "react";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // To handle loading state
  const [isTokenExpired, setIsTokenExpired] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found. Please login.");
      setIsLoading(false);
      return;
    }

    // Decode the token
    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      console.log("Decoded Token:", decodedToken);

      const tokenExpired = decodedToken.exp * 1000 < Date.now();
      setIsTokenExpired(tokenExpired);

      if (tokenExpired) {
        console.error("Token has expired. Please login again.");
        setIsLoading(false);
        return;
      }
    } catch (error) {
      console.error("Failed to decode token:", error);
      setIsLoading(false);
      return;
    }

    // Fetch user details
    const fetchUserDetails = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (response.ok) {
          setUserDetails(result);
        } else {
          console.error(result.message || "Failed to fetch user details");
        }
      } catch (error) {
        console.error("Failed to fetch user details", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isTokenExpired) {
    return <p>Your session has expired. Please log in again.</p>;
  }

  return (
    <div className="p-6">
      <h2>Your Profile</h2>
      {userDetails ? (
        <>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
        </>
      ) : (
        <p>No user details available.</p>
      )}
    </div>
  );
};

export default Profile;
