import React, { useEffect, useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";

const ViewChildBirths = () => {
  const [childBirths, setChildBirths] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchChildBirths = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8083/api/childbirths",
          { withCredentials: true } // Ensure cookies are sent with the request
        );
        setChildBirths(response.data);
      } catch (error) {
        console.error("Error fetching childbirths:", error);
        setError("Failed to load childbirths. Please try again.");
      }
    };

    fetchChildBirths();
  }, []);

  // Function to download the data as a PDF file
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Title for the PDF
    doc.setFontSize(18);
    doc.text("Childbirth Records", 20, 20);

    // Table headers
    doc.setFontSize(12);
    const headers = ["Date", "Time", "Child's Name", "Parents' Name", "Village Name", "Hospital Name"];
    const startY = 30; // Starting Y position for the table

    // Add headers to the PDF
    headers.forEach((header, index) => {
      doc.text(header, 20 + index * 40, startY);
    });

    // Add rows of data to the PDF
    childBirths.forEach((birth, rowIndex) => {
      doc.text(birth.date, 20, startY + (rowIndex + 1) * 10);
      doc.text(birth.time, 60, startY + (rowIndex + 1) * 10);
      doc.text(birth.name, 100, startY + (rowIndex + 1) * 10);
      doc.text(birth.parentsName, 140, startY + (rowIndex + 1) * 10);
      doc.text(birth.villageName, 180, startY + (rowIndex + 1) * 10);
      doc.text(birth.hospitalName, 220, startY + (rowIndex + 1) * 10);
    });

    // Save the PDF
    doc.save("childbirth_records.pdf");
  };

  return (
    <div>
      <h2>View Child Births</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {childBirths.length === 0 ? (
        <p>No childbirths found.</p>
      ) : (
        <div>
          <button onClick={downloadPDF} style={{ marginBottom: "20px" }}>
            Download as PDF
          </button>
          <table border="1" style={{ width: "100%", margin: "20px 0" }}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Child's Name</th>
                <th>Parents' Name</th>
                <th>Village Name</th>
                <th>Hospital Name</th>
              </tr>
            </thead>
            <tbody>
              {childBirths.map((birth, index) => (
                <tr key={index}>
                  <td>{birth.date}</td>
                  <td>{birth.time}</td>
                  <td>{birth.name}</td>
                  <td>{birth.parentsName}</td>
                  <td>{birth.villageName}</td>
                  <td>{birth.hospitalName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewChildBirths;
