import React from "react";
import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";
import SignInForm from "./SignInForm";
import "../../main.css";

function SignInPage() {
  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </>
  );
}

export default SignInPage;
