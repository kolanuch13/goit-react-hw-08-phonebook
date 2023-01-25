import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from '../../redux/auth/auth-operations';

const LoginView = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(logIn({ email, password }));
        setEmail('');
        setPassword('');
    }

    return (
        <section>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="">
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Підтверджую</button>
            </form>
        </section>
    );
}

export default LoginView;