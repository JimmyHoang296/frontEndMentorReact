import React, { useRef, useState, useEffect } from "react";
import styles from "./styles.module.css";
import btnIcon from "./assets/images/icon-arrow.svg";

export default function AgeCalculator() {
  const [inputs, setInputs] = useState({ day: "", month: "", year: "" });
  const [errors, setErrors] = useState({ day: "", month: "", year: "" });
  const [gap, setGap] = useState({ day: "", month: "", year: "" });

  const validateInput = (name, value) => {
    if (isNaN(value) || value === "") return "This field is required";
    if (name === "day" && (value < 1 || value > 31)) return "Must be a valid day";
    if (name === "month" && (value < 1 || value > 12)) return "Must be a valid month";
    if (name === "year" && value > new Date().getFullYear())
      return "Must be in the past";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateInput(name, value) }));
    setGap({ day: "", month: "", year: "" });
  };

  const calculateAge = () => {
    const isValid = Object.values(errors).every((err) => err === "") &&
                    Object.values(inputs).every((val) => val !== "");

    if (!isValid) {
      setErrors((prev) =>
        Object.fromEntries(
          Object.entries(inputs).map(([key, val]) => [
            key,
            val === "" ? "This field is required" : prev[key],
          ])
        )
      );
      return;
    }

    const { day, month, year } = inputs;
    const date = new Date(year, month - 1, day);

    if (date.getDate() !== +day) {
      setErrors({ day: "Must be a valid date", month: "", year: "" });
      return;
    }

    const today = new Date();
    let years = today.getFullYear() - date.getFullYear();
    let months = today.getMonth() - date.getMonth();
    let days = today.getDate() - date.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setGap({ day: days, month: months, year: years });
  };

  const AnimatedNumber = ({ targetNumber }) => {
    const [displayNumber, setDisplayNumber] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const interval = 20;
      const steps = duration / interval;
      const increment = targetNumber / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setDisplayNumber(targetNumber);
          clearInterval(timer);
        } else {
          setDisplayNumber(Math.round(start));
        }
      }, interval);

      return () => clearInterval(timer);
    }, [targetNumber]);

    return <span className={styles.number}>{displayNumber?displayNumber:'--'}</span>;
  };

  return (
    <div className={styles.main}>
      <div className={styles.calculator}>
        <div className={styles.inputs}>
          {["day", "month", "year"].map((field) => (
            <div key={field} className={styles.inputItem}>
              <label
                htmlFor={field}
                className={errors[field] ? styles.errorLabel : ""}
              >
                {field.toUpperCase()}
              </label>
              <input
                type="text"
                name={field}
                value={inputs[field]}
                placeholder={field}
                onChange={handleChange}
                className={errors[field] ? styles.errorInput : ""}
              />
              {errors[field] && <p className={styles.err}>{errors[field]}</p>}
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.btn} onClick={calculateAge}>
            <img src={btnIcon} alt="Calculate" />
          </button>
        </div>
        <div className={styles.results}>
          {["year", "month", "day"].map((field) => (
            <p key={field} className={styles.result}>
              <AnimatedNumber targetNumber={gap[field] || ''} /> {field}s
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
