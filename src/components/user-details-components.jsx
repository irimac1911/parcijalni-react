const UserDetails = ({ user }) => {
  if (!user) {
    return <p>No user information</p>;
  }

  return (
    <div>
      <h2>User-details{user.login}</h2>
    </div>
  );
};

export default UserDetails;
