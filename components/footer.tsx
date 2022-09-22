import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'


const Footer = () => {

    const element = <FontAwesomeIcon icon={faGithub} />

    return (
        <div className="text-center border-t border-slate-300 p-4 text-slate-400">
            <div>Designed with love by kapitan</div>
            <Link href='https://github.com'>
            <a className='text-3xl text-slate-300'>{element}</a>
            </Link>
        </div>
    )
}

export default Footer;