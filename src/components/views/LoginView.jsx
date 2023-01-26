import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from '../../redux/auth/auth-operations';
import {
    Input,
    Button,
    Heading,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';



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
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(logIn({ email, password }));
        setEmail('');
        setPassword('');

    };

    return (
        <section>
            <Heading>Log in</Heading>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>
                        Email
                        <Input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </FormLabel>
                    <FormLabel>
                        Password
                        <Input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </FormLabel>
                    <Button
                        type="submit"
                        as="button"
                        p={4}
                        color="white"
                        fontWeight="bold"
                        borderRadius="md"
                        bgGradient="linear(to-r, teal.500, green.500)"
                        _hover={{
                            bgGradient: 'linear(to-r, red.500, yellow.500)',
                        }}
                    >
                        LogIn
                    </Button>
                </FormControl>
            </form>
        </section>
    );
}

export default LoginView;