import { Link } from "react-router-dom";
function NoMatch() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
      color: "#333",
    },
    heading: {
      fontSize: "6rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    message: {
      fontSize: "1.5rem",
      marginBottom: "1.5rem",
    },
    homeLink: {
      fontSize: "1.2rem",
      color: "#007bff",
      textDecoration: "none",
      border: "1px solid #007bff",
      padding: "0.5rem 1rem",
      borderRadius: "4px",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" style={styles.homeLink}>
        Go back to Home
      </Link>
    </div>
  );
}

export default NoMatch;
