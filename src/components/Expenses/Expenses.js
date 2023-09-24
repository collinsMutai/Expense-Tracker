import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setYear] = useState("2020");
  const selectYearHandler = (filteredYear) => {
    setYear(filteredYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (props.items.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={selectYearHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={ filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
