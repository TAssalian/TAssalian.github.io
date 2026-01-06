import type { Contact } from "../data/contact";
import { ContactButton } from "./ContactButton";

type IntroductionProps = {
    contacts: Contact[];
};

function Introduction({ contacts }: IntroductionProps) {
    return (
        <div className="introduction">
            <div className="intro-header">
                <div className="name">
                    <h1>Thomas Assalian</h1>
                </div>
                <div className="contact-information" aria-label="Social links">
                    {contacts.map((contact) => (
                        <ContactButton key={contact.label} contact={contact} />
                    ))}
                </div>
            </div>
            <div className="description">
                <h3>Software engineer studying Computer Science at Concordia University, Montreal</h3>
                <h3>Previously interned at UKG, Alstom, and Telus</h3>
            </div>
        </div>
    );
}

export default Introduction
