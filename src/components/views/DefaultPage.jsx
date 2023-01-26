import { getUsername } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const DefaultPage = () => {
    const user = useSelector(getUsername);
    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '500px',
            alignItems: 'center',
        }}>
            <h1>Wassup🐶 {user}</h1>
            <p>Here you can to save some contacts.
                And you can see the cat.
            </p>
            <img
                src="https://images.unsplash.com/photo-1611267254323-4db7b39c732c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                alt="cat"
            />
        </section>
    );
};

export default DefaultPage;
