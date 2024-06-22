import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar: FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="https://github.com">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;