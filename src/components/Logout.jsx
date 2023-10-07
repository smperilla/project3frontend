import React from 'react';

function Logout() {
  const handleLogout = async () => {
    try {
      const response = await fetch('https://zapchatbackend.onrender.com/login/logout', {
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
