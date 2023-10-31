// import { useContext, useEffect, useRef, useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // const captchaRef = useRef(null);
    // const [btnDisabled, setBtnDisabled] = useState(true);
    // const { createUser } = useContext(AuthContext);

    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, []);

    /*  const handleSignUp = e => {
         e.preventDefault();
         const name = e.target.name.value;
         const email = e.target.email.value;
         const password = e.target.password.value;
 
         createUser(email, password)
             .then(user => console.log(user.user))
             .catch(err => console.error(err))
     }; */

    const onSubmit = (data) => {
        console.log(data)
    }

   /*  const handleCaptcha = () => {
        const captchaValue = captchaRef.current.value;

        if (validateCaptcha(captchaValue)) {
            setBtnDisabled(false)
        } else {
            setBtnDisabled(true)
        }
    } */


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl px-8 py-6">
                <div className="text-center lg:text-left img-section">

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                    <h3 className='text-3xl font-bold text-center mt-5'>Sign Up</h3>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="Type here name" className="input input-bordered" required />
                            {errors.name && <span className='text-error'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name='email' placeholder="Type here email" className="input input-bordered" required />
                            {errors.email && <span className='text-error'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} name='password' placeholder="Type here password" className="input input-bordered" required />
                            {errors.password && <span className='text-error'>Password is required</span>}
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} placeholder="Type here captcha" className="input input-bordered" required />
                            <button className="btn btn-outline btn-xs mt-3" onClick={handleCaptcha}>Validate</button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div> */}
                        <div className="form-control mt-6">
                            <button  className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;