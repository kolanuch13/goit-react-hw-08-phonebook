import { getUsername } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';

const HomeView = () => {
    const user = useSelector(getUsername);
    const dispatch = useDispatch()
    return (
        <section>
            <h1>Wassup🐶</h1>
            <div>
                <p>{user}</p>
                <button
                    type='button'
                    onClick={() => {dispatch(logOut())}}
                >Logout</button>
            </div>
        </section>
    );
};

export default HomeView;
