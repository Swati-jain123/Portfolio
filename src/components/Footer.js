import React from "react";

function Footer() {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px 0"
  };

  const lineStyle = {
    height: "1px",
    backgroundColor: "#ccc",
    width: "30%", // Adjust width of the lines
    flexShrink: 0 // Prevent line from shrinking
  };

  const crossStyle = {
    margin: "0 10px",
    fontSize: "24px", // Adjust size of the cross
    color: "white" // Change color if needed
  };

  return (
    <div style={containerStyle}>
      <div style={lineStyle}></div>
      <span style={crossStyle}>✖</span> {/* Cross symbol */}
      <div style={lineStyle}></div>
    </div>
  );
}

export default Footer;
