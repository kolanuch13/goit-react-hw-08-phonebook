import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from "../../redux/auth/auth-operations"

const RegisterView = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(register({ name, email, password }));
        console.log({ name, email, password });
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <section>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </label>
                <label onSubmit={handleSubmit}>
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
                        pattern="^[0-9][a-z][A-Z][0-9]{8}$"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default RegisterView;
