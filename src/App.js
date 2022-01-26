import "./App.css";
import React, { useState } from "react";

function App() {
  const [records, setRecords] = useState([
    {
      person: "Steve",
      order: {
        main: "Burrito",
        protein: "Organic Tofu",
        rice: "Purple Rice",
        sauce: "Green Crack",
        toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
        drink: "Korchata",
        cost: 22,
      },
      paid: false,
    },
    {
      person: "Maddy",
      order: {
        main: "Rice Bowl",
        protein: "Ginger Soy Chix",
        rice: "Sticky Rice",
        sauce: "Korilla",
        toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
        drink: "Korchata",
        cost: 19,
      },
      paid: false,
    },
    {
      person: "Derrick",
      order: {
        main: "Salad Bowl",
        protein: "Organic Tofu",
        rice: "none",
        sauce: "K'lla",
        toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
        drink: "Sparkling Blood Orange Soda",
        cost: 20,
      },
      paid: true,
    },
  ]);

  return (
    <div className="App">
      <div>
        {records.map((record) => (
          <div key={record.cost}>
            <p>{record.person}</p>
            <p>{record.order.main}</p>
            <p>{record.order.protein}</p>
            <p>{record.order.rice}</p>
            <p>{record.order.sauce}</p>
            <p>{record.order.drink}</p>
            <p>{record.order.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
