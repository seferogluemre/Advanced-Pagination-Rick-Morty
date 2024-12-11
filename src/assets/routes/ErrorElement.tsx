// src/components/ErrorPage.jsx
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div style={styles.container} className="text-center">
            <h1 style={styles.header}>404</h1>
            <p style={styles.text}>Üzgünüz, aradığınız sayfa bulunamadı!</p>
            <Link to="/" style={styles.link}>
                Ana Sayfaya Dön
            </Link>
        </div>
    );
};

const styles = {
    container: {

        marginTop: "10%",
        color: "#333",
        fontFamily: "Arial, sans-serif",
    },
    header: {
        fontSize: "6rem",
        margin: 0,
        color: "#e74c3c",
    },
    text: {
        fontSize: "1.5rem",
        marginBottom: "1.5rem",
    },
    link: {
        color: "#fff",
        backgroundColor: "#3498db",
        padding: "10px 20px",
        textDecoration: "none",
        borderRadius: "5px",
    },
};

export default ErrorPage;
