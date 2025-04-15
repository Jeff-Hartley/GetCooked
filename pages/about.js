import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>GetCooked - About Us</title>
            </Head>

            <Header />

            <main className="main-container about-container">
                <h1 className="about-title">Meet the Team</h1>
                <p className="about-description">
                    We’re a group of five students who built GetCooked as a fun and helpful recipe app project.
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
