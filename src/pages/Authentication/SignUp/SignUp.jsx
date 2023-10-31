import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';


const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const captchaRef = useRef(null);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const { createUser, addUsername } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);


    const onSubmit = (data) => {
        // console.log(data)
        const name = data.name;
        const email = data.email;
        const password = data.password;

        createUser(email, password)
            .then(user => {
                addUsername(name)
                    .then(() => {})
                    .catch(err => console.error(err))
                console.log(user.user)
            })
            .catch(err => console.error(err))
    }

    const handleCaptcha = () => {
        const captchaValue = captchaRef.current.value;

        if (validateCaptcha(captchaValue)) {
            setBtnDisabled(false)
        } else {
            setBtnDisabled(true)
        }
    }


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
                            <input type="text" {...register("name", { required: true })} placeholder="Type here name" className="input input-bordered" required />
                            {errors.name && <span className='text-error'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} placeholder="Type here email" className="input input-bordered" required />
                            {errors.email && <span className='text-error'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} placeholder="Type here password" className="input input-bordered" required />
                            {errors.password && <span className='text-error'>Password is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <div className='flex'>
                                <input type="text" ref={captchaRef} placeholder="Type here captcha" className="input input-bordered" required />
                                <svg onClick={handleCaptcha} className='w-16 text-4xl cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={btnDisabled} type='submit' className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;