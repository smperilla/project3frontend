import React from 'react';

function Logout() {
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:4000/login/logout', {
        method: 'POST',
      });

      if (response.ok) {
        // Redirect to the login page upon successful logout
        window.location.href = '/login';
      } else {
        console.error('Logout failed.');
      }
    } catch (error) {
      console.error('An error occurred while logging out.');
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;
