const RatingStar = ({ filled = false, onClick }) => {
    return (
      <span
        onClick={onClick}
        style={{
          cursor: "pointer",
          color: filled ? "#FFD700" : "#ccc",
          fontSize: "24px",
          userSelect: "none",
          marginRight: "4px",
        }}
        role="button"
        aria-label={filled ? "Estrella llena" : "Estrella vacía"}
        title={filled ? "Estrella llena" : "Estrella vacía"}
      >
        ★
      </span>
    );
  };
  
  export default RatingStar;
  