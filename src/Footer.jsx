import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <>
            <footer className="border-top">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a href="#!">
                                        <span className="fa-stack fa-lg">
                                            <FontAwesomeIcon className="fa-2x" style={{ color: 'black' }} icon={faTwitter} />
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!">
                                        <span className="fa-stack fa-lg">
                                            <FontAwesomeIcon className="fa-2x" style={{ color: 'black' }} icon={faFacebookF} />
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!">
                                        <span className="fa-stack fa-lg">
                                            <FontAwesomeIcon className="fa-2x" style={{ color: 'black' }} icon={faGithub} />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <div className="small text-center text-muted fst-italic">Copyright &copy; Your Website 2022</div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer