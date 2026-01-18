import type { Contact } from "../data/contact";
import { ContactButton } from "./ContactButton";
import { NavBar } from "./NavBar";

type IntroductionProps = {
    contacts: Contact[];
    showDetails?: boolean;
};

function Introduction({ contacts, showDetails = false }: IntroductionProps) {
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
            {showDetails ? (
                <>
                    <div className="description">
                        <h3>I'm a software engineering student with 3+ years of experience across coding, software engineering, and artificial intelligence. I have a passion for backend engineering, LLM-based systems, mathematics, theoretical computer science, and lifelong learning. I have previous experience at UKG, Alstom and TELUS.</h3>
                        <br></br>
                        <h3>If you would like to reach out, feel free to contact me via any of my contact information above.</h3>
                    </div>
                    <div className="intro-image-grid">
                        <img
                            className="intro-image"
                            src="/image-1.JPG"
                            alt="Photo 1"
                        />
                        <img
                            className="intro-image"
                            src="/image-2.jpeg"
                            alt="Photo 2"
                        />
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default Introduction
