import React, { useState } from "react";
import styles from "./styles.module.css";

import calculatorIcon from "./assets/images/icon-calculator.svg";
import emptyIcon from "./assets/images/illustration-empty.svg";

function convertNumber(value) {
  const rawVal = value.replace(/,/g, "");
  if (/^[0-9]*(\.[0-9]{0,2})?$/.test(rawVal)) {
    const parts = rawVal.split("."); // Split integer and decimal parts
    parts[0] = parseInt(parts[0] || 0, 10).toLocaleString(); // Format integer part
    return parts.join("."); // Format with commas
  }
}

export default function MortgageCalculator() {
  const [values, setValues] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "",
  });
  const [errors, setErrors] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "",
  });
  const [result, setResult] = useState({ monthly: "", total: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({ amount: "", term: "", rate: "", type: "" });

    if (name === "amount") {
      const rawVal = value.replace(/,/g, "");
      if (rawVal == "") {
        setValues({ ...values, [name]: "" });
      } else if (/^[0-9]*(\.[0-9]{0,2})?$/.test(rawVal)) {
        setValues({ ...values, [name]: convertNumber(value) }); // Format with commas
      } else {
        return;
      }
    }
    if (name == "term") {
      if (isNaN(value)) {
        return;
      } else {
        setValues({ ...values, [name]: value });
      }
    }
    if (name == "rate") {
      if (/^\d*\.?\d{0,2}$/.test(value)) {
        setValues({ ...values, [name]: value });
      } else {
        return;
      }
    }
    if (name == "type") {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = () => {
    // validate values
    var newErrors = { ...errors };
    for (let key in values) {
      if (values[key] === "") {
        newErrors = { ...newErrors, [key]: "This field is required" };
      } else {
        newErrors = { ...newErrors, [key]: "" };
      }
    }
    setErrors(newErrors);
    if (!Object.values(values).every((val) => val !== "")) return;

    var newResult = { ...result };
    const { amount, term, rate, type } = values;
    const mAmount = parseFloat(amount.replace(/,/g, "")); // Convert amount to a number
    const mRate = rate / 12 / 100; // Monthly interest rate
    const mTerm = term * 12; // Total number of payments

    if (type === "Repayment") {
      // Repayment mortgage formula
      const monthlyPayment =
        (mAmount * (mRate * Math.pow(1 + mRate, mTerm))) /
        (Math.pow(1 + mRate, mTerm) - 1);
      newResult.monthly = monthlyPayment.toFixed(2); // Round monthly payment to 2 decimals
      newResult.total = (monthlyPayment * mTerm).toFixed(2); // Total paid over the term
    } else {
      // Interest-only mortgage formula
      const monthlyPayment = mAmount * mRate;
      newResult.monthly = monthlyPayment.toFixed(2); // Round monthly interest payment to 2 decimals
      newResult.total = (monthlyPayment * mTerm + mAmount).toFixed(2); // Total interest paid over the term plus the principal
    }
    setResult(newResult);
  };

  const BlankResult = () => {
    return (
      <div className={styles.blankResult}>
        <img src={emptyIcon} alt="" />
        <p className={styles.resultTitle}>Results shown here</p>
        <p className={styles.resultText}>
          Complete the form and click "calculate repayments" to see what your
          monthly repayments would be
        </p>
      </div>
    );
  };

  const Result = () => {
    return (
      <div className={styles.result}>
        <p className={styles.resultTitle}>Your results</p>
        <p className={styles.resultText}>
          Your results are shown below based on the information you provied. To
          adjust the results, edit the form and click "calculate repayments"
          again.
        </p>
        <div className={styles.card}>
          <p className={styles.resultText}>Your monthly repayments</p>
          <p className={styles.monthlyPayment}>
            £{convertNumber(result.monthly)}
          </p>

          <p className={styles.resultText}>Total you'll repay over the term</p>
          <p className={styles.totalPayment}>£{convertNumber(result.total)}</p>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.main}>
      <div className={styles.calculator}>
        <div className={styles.form}>
          <div className={styles.headForm}>
            <p className={styles.title}>Mortgage Calculator</p>
            <button
              className={styles.clearBtn}
              onClick={() => {
                setValues({ amount: "", term: "", rate: "", type: "" });
              }}
            >
              Clear All
            </button>
          </div>

          <div className={styles.item}>
            <label>Mortgage Amount</label>
            <div
              className={
                errors.amount
                  ? `${styles.inputElement} ${styles.err}`
                  : styles.inputElement
              }
            >
              <span>£</span>
              <input
                type="text"
                name="amount"
                onChange={handleChange}
                value={values.amount}
              />
            </div>
            {errors.amount && <p className={styles.caution}>{errors.amount}</p>}
          </div>
          <div className={styles.tar}>
            <div className={styles.item}>
              <label>Mortgage Term</label>
              <div
                className={
                  errors.term
                    ? `${styles.inputElement} ${styles.err}`
                    : styles.inputElement
                }
              >
                <input
                  type="text"
                  name="term"
                  onChange={handleChange}
                  value={values.term}
                />
                <span>years</span>
              </div>
              {errors.term && <p className={styles.caution}>{errors.term}</p>}
            </div>
            <div className={styles.item}>
              <label>Interest Rate</label>
              <div
                className={
                  errors.rate
                    ? `${styles.inputElement} ${styles.err}`
                    : styles.inputElement
                }
              >
                <input
                  type="text"
                  name="rate"
                  onChange={handleChange}
                  value={values.rate}
                />
                <span>%</span>
              </div>
            </div>

            {errors.rate && <p className={styles.caution}>{errors.rate}</p>}
          </div>
          <div className={styles.item}>
            <label>Mortgage Type</label>
            <label className={styles.radioItem}>
              <input
                type="radio"
                name="type"
                value="Repayment"
                checked={values.type === "Repayment"}
                onChange={handleChange}
              />
              Repayment
            </label>
            <label className={styles.radioItem}>
              <input
                type="radio"
                name="type"
                value="Interest Only"
                checked={values.type === "Interest Only"}
                onChange={handleChange}
              />
              Interest Only
            </label>
            {errors.type && <p className={styles.caution}>{errors.type}</p>}
          </div>
          <button className={styles.calculateBtn} onClick={handleSubmit}>
            <img src={calculatorIcon} alt="" />
            Calculate Repayments
          </button>
        </div>
        {result.total ? <Result /> : <BlankResult />}
      </div>
    </div>
  );
}
