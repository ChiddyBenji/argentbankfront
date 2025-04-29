import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/Common/NavBar";
import Footer from "../components/Common/Footer";
import EditNameForm from "../components/Auth/EditNameForm";
import "../main.css";

function UserPage() {
  const [isEditing, setIsEditing] = useState(false);
  const { firstName, lastName } = useSelector((state) => state.auth.userInfos);

  const accounts = [
    {
      title: "Argent Bank Checking (x8349)",
      balance: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      balance: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      balance: "$184.30",
      description: "Current Balance",
    },
  ];

  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <div className="header">
          {!isEditing ? (
            <>
              <h1>
                Welcome back
                <br />
                {firstName} {lastName}!
              </h1>
              <button 
                className="edit-button" 
                onClick={() => setIsEditing(true)}
              >
                Edit Name
              </button>
            </>
          ) : (
            <>
              <h1>Edit your info</h1>
              <EditNameForm onCancel={() => setIsEditing(false)} />
            </>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        {accounts.map((account, index) => (
          <section className="account" key={index}>
            <div className="account-content-wrapper">
              <h3 className="account-title">{account.title}</h3>
              <p className="account-amount">{account.balance}</p>
              <p className="account-amount-description">
                {account.description}
              </p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default UserPage;