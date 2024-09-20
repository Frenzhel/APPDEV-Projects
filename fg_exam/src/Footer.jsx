export default function Footer(){
    return(
        <footer>
            <p>
                &copy; {new Date().getFullYear()} GLife || Written by: Frenzhel Sagoco
            </p>
            <ul class="social-icons">
                <li>
                    <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                    <a href="https://facebook.com"><i class="fab fa-facebook"></i></a>
                </li>
                <li>
                    <a href="https://behance.com"><i class="fab fa-behance"></i></a>
                </li>
                <li>
                    <a href="https://linkedin.com"><i class="fab fa-linkedin"></i></a>
                </li>
                <li>
                    <a href="https://sketch.com"><i class="fab fa-sketch"></i></a>
                </li>
            </ul>
        </footer>
    )
}