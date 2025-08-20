function Homepage({ Letter = "" }) {
  return (
    <div
      className=" d-flex align-items-center vh-100 justify-content-center "
      style={{
        color: "white",
        backgroundColor: "black",
        fontSize: "3rem",
        zIndex: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span>Find the letter and Click on it to continue </span>
      <span>{Letter}</span>
    </div>
  );
}

export default Homepage;
