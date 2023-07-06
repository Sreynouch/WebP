import React from 'react';
class Login extends React.Component{
    render(){
        return(
            <main class="mb-10 mt-5">
                <div class="container px-5 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <h2>Register</h2>
                                <div class="my-5">
                                    <form>
                                        <div className="form-outline mb-4">
                                            <input type="email" name="form2Example1" className="form-control" />
                                            <label className="form-label" for="form2Example1">Email address</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" name="form2Example2" className="form-control" />
                                            <label className="form-label" for="form2Example2">Password</label>
                                        </div>

                                        <div className="row mb-4">

                                            <div className="col">
                                            <a href="#!">Forgot password?</a>
                                            </div>
                                        </div>

                                        <button type="button" className="btn btn-primary btn-block mb-4">Log In</button>

                                        <div className="text-center">
                                            <p>Not a member? <a href="#!">Register</a></p>
                                        </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
export default Login;