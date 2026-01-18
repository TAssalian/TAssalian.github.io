import type { Contact } from "../data/contact";
import { ContactButton } from "./ContactButton";
import { NavBar } from "./NavBar";

type IntroductionProps = {
    contacts: Contact[];
};

function Introduction({ contacts }: IntroductionProps) {
    return (
        <div className="introduction">
            <div className="intro-header">
                <div className="name">
                    <h1>Thomas Assalian</h1>
                    <p className="name-subtitle">BSc Computer Science — Concordia University, Montreal</p>
                </div>
                <div className="contact-information" aria-label="Social links">
                    {contacts.map((contact) => (
                        <ContactButton key={contact.label} contact={contact} />
                    ))}
                </div>
            </div>
            <NavBar />
            <hr className="intro-divider" />
        </div>
    );
}

export default Introduction
