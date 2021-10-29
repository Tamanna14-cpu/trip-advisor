import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
            <footer>
                <div class="row my-5 justify-content-center pb-5 pt-2">
                    <div class="col-11">
                        <div class="row ">
                            <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                <h3 class="text-muted mb-md-0 mb-5 bold-text">Pepper.</h3>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 class="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                                <ul class="list-unstyled">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Blog</li>
                                    <li>Portfolio</li>
                                </ul>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                                <p class="mb-1">605, RATAN ICON BUILDING</p>
                                <p>SEAWOODS SECTOR</p>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                <p class="social text-muted mb-0 pb-0 bold-text">
                                    <span class="mx-2"><i class="fab fa-facebook-square"></i></span>
                                    <span class="mx-2"><i class="fa fa-linkedin-square" ></i></span>
                                    <span class="mx-2"><i class="fa fa-twitter"></i></span>
                                    <span class="mx-2"><i class="fa fa-instagram" ></i></span>
                                </p><small class="rights"><span>&#174;</span> Pepper All Rights Reserved.</small>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                <h6 class="mt-55 mt-2 text-muted bold-text"><b>ANIRUDH SINGLA</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> anirudh@gmail.com</small>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                <h6 class="text-muted bold-text"><b>RISHABH SHEKHAR</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> rishab@gmail.com</small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;