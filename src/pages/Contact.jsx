import React from "react";
import ContactsHero from "../components/Contacts/ContactsHero";
import ContactCards from "../components/Contacts/ContactCards";

function Contact() {
  return (
    <div className="bg-gray-50">
      <ContactsHero />
      <ContactCards />
    </div>
  );
}

export default Contact;
