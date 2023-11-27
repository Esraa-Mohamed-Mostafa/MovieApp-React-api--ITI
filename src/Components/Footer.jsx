import '../App.css';
function Footer() {
    return (
        <>

            <footer className="footer py-5">
                <div className="container">
                    <div className=" d-flex flex-wrap py-4 justify-content-between">


                        <div className="footer__item mb-3 ">
                            <ul className="footer__links">
                                <li><a href="">FAQ</a></li>
                                <li><a href=""> Investor Relations</a></li>
                                <li ><a href=""> Privacy</a></li>
                                <li><a href=""> Speed Test</a></li>

                            </ul>
                        </div>

                        <div className="footer__item mb-3" >
                            <ul className="footer__links">
                                <li><a href=""> Media center </a></li>
                                <li><a href=""> Events</a></li>
                                <li><a href=""> Contact Us </a></li>
                                <li><a href=""> Partners</a></li>
                            </ul>

                        </div>
                        <div className="footer__item ">
                            <ul className="footer__links">
                                <li><a href=""> Account</a></li>
                                <li><a href=""> Ways to watch</a></li>
                                <li><a href=""> Corporate Information </a></li>
                                <li><a href=""> Community</a></li>
                            </ul>
                        </div>
                        <div className="footer__item">
                            <ul className="footer__links">
                                <li><a href="">Help Center</a></li>
                                <li><a href=""> Jobs</a></li>
                                <li ><a href="">  Cookie Preferences</a></li>
                                <li><a href=""> Legal Notices</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="footer__rights pt-4">
                    © 2023 Lookscout. All Rights Reserved.
                </div>
            </footer>
        </>
    );
}
export default Footer;