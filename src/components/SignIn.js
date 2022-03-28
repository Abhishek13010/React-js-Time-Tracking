import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const SignIn = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    var navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        var data = {
            email: email,
            password: password
        }
        await axios.post('http://localhost:4000/login', data).then((res) => {
            if (res.data.status == 200) {
                localStorage.setItem('email', res.data.data.email)
                localStorage.setItem('firstName', res.data.data.firstName)
                localStorage.setItem('role', res.data.data.roleName)
                toast(res.data.msg)
                setTimeout(() => {
                    navigate('/')
                }, 2000);

            }
            else {
                console.log("Here!!!")
                toast(res.data.msg)

                setTimeout(() => {
                    navigate('/signin')
                }, 2000);
            }
        })
    }

    return (
        <div>
            <body className="">
                <div className="container position-sticky z-index-sticky top-0">
                    <div className="row">
                        <div className="col-12">
                            {/* <!-- Navbar --> */}
                            <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                                <div className="container-fluid pe-0">
                                    <Link className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " to="/">
                                        Soft UI Dashboard
                                    </Link>
                                    <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon mt-2">
                                            <span className="navbar-toggler-bar bar1"></span>
                                            <span className="navbar-toggler-bar bar2"></span>
                                            <span className="navbar-toggler-bar bar3"></span>
                                        </span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navigation">
                                        <ul className="navbar-nav mx-auto ms-xl-auto me-xl-7">
                                            <li className="nav-item">
                                                <Link className="nav-link d-flex align-items-center me-2 active" aria-current="page" to="/">
                                                    <i className="fa fa-chart-pie opacity-6 text-dark me-1"></i>
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link me-2" to="/profile">
                                                    <i className="fa fa-user opacity-6 text-dark me-1"></i>
                                                    Profile
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link me-2" to="/signup">
                                                    <i className="fas fa-user-circle opacity-6 text-dark me-1"></i>
                                                    Sign Up
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link me-2" to="/signin">
                                                    <i className="fas fa-key opacity-6 text-dark me-1"></i>
                                                    Sign In
                                                </Link>
                                            </li>
                                        </ul>
                                        <li className="nav-item d-flex align-items-center">
                                            <a className="btn btn-round btn-sm mb-0 btn-outline-primary me-2" target="_blank" href="https://www.creative-tim.com/builder/soft-ui?ref=navbar-dashboard">Online Builder</a>
                                        </li>
                                        <ul className="navbar-nav d-lg-block d-none">
                                            <li className="nav-item">
                                                <a href="https://www.creative-tim.com/product/soft-ui-dashboard" className="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark">Free download</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            {/* <!-- End Navbar --> */}
                        </div>
                    </div>
                </div>
                <main className="main-content  mt-0">
                    <section>
                        <div className="page-header min-vh-75">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                                        <div className="card card-plain mt-8">
                                            <div className="card-header pb-0 text-left bg-transparent">
                                                <h3 className="font-weight-bolder text-info text-gradient">Welcome back</h3>
                                                <p className="mb-0">Enter your email and password to sign in</p>
                                            </div>
                                            <div className="card-body">
                                                <form role="form" onSubmit={login}>
                                                    <label>Email</label>
                                                    <div className="mb-3">
                                                        <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" onChange={(e) => { setemail(e.target.value) }} />
                                                    </div>
                                                    <label>Password</label>
                                                    <div className="mb-3">
                                                        <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" onChange={(e) => { setpassword(e.target.value) }} />
                                                    </div>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="rememberMe" checked="" />
                                                        <label className="form-check-label" for="rememberMe">Remember me</label>
                                                    </div>
                                                    <div className="text-center">
                                                        <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0">Sign in</button>
                                                        <ToastContainer
                                                            position="top-left"
                                                            autoClose={1000}
                                                            hideProgressBar={false}
                                                            newestOnTop={false}
                                                            closeOnClick
                                                            rtl={false}
                                                            pauseOnFocusLoss
                                                            draggable
                                                            pauseOnHover
                                                        />
                                                        {/* Same as */}
                                                        <ToastContainer />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                                <p className="mb-4 text-sm mx-auto">
                                                    Don't have an account?
                                                    <Link to="/signup" className="text-info text-gradient font-weight-bold">Sign Up</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                                            <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{ backgroundImage: "url('../assets/img/curved-images/curved6.jpg')" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                {/* <!-- -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- --> */}
                <footer className="footer py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-4 mx-auto text-center">
                                <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                                    Company
                                </a>
                                <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                                    About Us
                                </a>
                                <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                                    Team
                                </a>
                                <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                                    Products
                                </a>
                                <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                                    Blog
                                </a>
                                <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                                    Pricing
                                </a>
                            </div>
                            <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
                                <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                                    <span className="text-lg fab fa-dribbble"></span>
                                </a>
                                <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                                    <span className="text-lg fab fa-twitter"></span>
                                </a>
                                <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                                    <span className="text-lg fab fa-instagram"></span>
                                </a>
                                <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                                    <span className="text-lg fab fa-pinterest"></span>
                                </a>
                                <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                                    <span className="text-lg fab fa-github"></span>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 mx-auto text-center mt-1">
                                <p className="mb-0 text-secondary">
                                    Copyright © <script>
                                        document.write(new Date().getFullYear())
                                    </script> Soft by Creative Tim.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>


            </body>
        </div>
    )
}
