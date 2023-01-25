import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from "../../redux/auth/auth-operations"
import { Input, Button, Heading, FormControl, FormLabel } from '@chakra-ui/react';

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
            <Heading>Register</Heading>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>
                        Name
                        <Input
                            type="name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </FormLabel>
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
                            pattern="^[0-9][a-z][A-Z][0-9]{8}$"
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
                        Submit
                    </Button>
                </FormControl>
            </form>
        </section>
    );
};

export default RegisterView;
