import React from "react";

const MealsTable = ({ rows }) => {
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Breakfast</th>
            <th scope="col">Lunch</th>
            <th scope="col">Dinner</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr>
              <td>{row.day}</td>
              <td>{row.breakfast}</td>
              <td>{row.lunch}</td>
              <td>{row.dinner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MealsTable;
