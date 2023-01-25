import { getUsername } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { Button } from '@chakra-ui/react';


const HomeView = () => {
    const user = useSelector(getUsername);
    const dispatch = useDispatch()
    return (
        <section>
            <h1>Wassup🐶</h1>
            <div>
                <p>{user}</p>
                <Button
                    type='button'
                    onClick={() => {dispatch(logOut())}}
                >Logout</Button>
            </div>
        </section>
    );
};

export default HomeView;
