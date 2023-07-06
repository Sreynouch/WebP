import React from 'react';
class Signup extends React.Component{
    render(){
        return(
            <main class="mb-10 mt-5">
                <div class="container px-5 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <h2>Create your account</h2>
                                <div class="my-5"></div>
                                    <form>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form2Example1">Full name</label>
                                            <input type="text" name="form2Example1" className="form-control" />
                                        </div>

                                        <div className="form-outline mb-4">
                                        <label className="form-label" for="form2Example2">Email address</label>
                                            <input type="email" name="form2Example2" className="form-control" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form2Example1">Password</label>
                                            <input type="password" name="form2Example1" className="form-control" />
                                        </div>

                                        <div className="form-outline mb-4">
                                        <label className="form-label" for="form2Example2">Comfirm Password</label>
                                            <input type="password" name="form2Example2" className="form-control" />
                                        </div>

                                        <button type="button" className="btn btn-primary btn-block mb-4">Sign Up</button>
                                    </form>
                                </div>
                        </div>
                    </div>
            </main>
        );
    }
}
export default Signup;