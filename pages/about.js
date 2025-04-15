import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <>
            <Header />

            <main className="main-container about-container">
                <h1 className="about-title">The Team</h1>
                <p className="about-description">
                    We’re a group of five students at Humber College who built GetCooked, as a fun and helpful recipe app project to showcase our skills.
                </p>

                <ul className="team-list">
                    <li className="team-member"><strong>Jeffrey Hartley</strong> — Frontend Developer</li>
                    <li className="team-member"><strong>Raj Patel</strong> — State Management</li>
                    <li className="team-member"><strong>Mushfika Hossain</strong> — UI/UX & Styling</li>
                    <li className="team-member"><strong>Ralph Sampaga</strong> — API Integration & Data Handling</li>
                    <li className="team-member"><strong>Kerlan Augustine</strong> — Testing, Deployment & Documentation</li>
                </ul>
            </main>

            <Footer />
        </>
    );
}
