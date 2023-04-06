import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';

export function NavBar() {



    return (
        <div className={styles.navContainer}>
            <div className={styles.navLeft}>
                <h2 ><NavLink className={styles.heading} to={'/'}>Amazon</NavLink></h2>
            </div>

            <div className={styles.navRight}>
                {/* <p><NavLink to={'/'}></NavLink></p> */}
                <p ><NavLink className={styles.links} to={'/about'}>About</NavLink></p>
                <p ><NavLink className={styles.links} to={'/login'}>Login</NavLink></p>
                <p ><NavLink className={styles.links} to={'/cart'}>Cart</NavLink></p>
            </div>
        </div>
    );
}