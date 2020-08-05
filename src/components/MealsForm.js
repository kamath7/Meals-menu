import React, { useState } from "react";

const MealsForm = () => {
  const [day, setDay] = useState("Sunday");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const [items, setItem] = useState([]);
  const handleChange = e => {
    e.preventDefault();
    setItem([
      ...items,
      {
        day,
        breakfast,
        lunch,
        dinner
      }
    ]);

  };
  return (
    <div>
      <form className="form-inline" onSubmit={handleChange}>
        <select className="input-group mb-2 mr-sm-2" value={day} onChange={e => setDay(e.target.value)}>
          {days.map(day => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Breakfast"
          value={breakfast}
          onChange={e => setBreakfast(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lunch"
          className="form-control mb-2 mr-sm-2"

          value={lunch}
          onChange={e => setLunch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dinner"
          className="form-control mb-2 mr-sm-2"

          value={dinner}
          onChange={e => setDinner(e.target.value)}
        />
        <input type="submit" className="btn btn-primary mb-2" value="Submit"/>
      </form>
    </div>
  );
};

export default MealsForm;
