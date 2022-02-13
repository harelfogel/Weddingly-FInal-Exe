import { Hearts } from 'react-loader-spinner';
import './MyLoader.css'


export default function MyLoader({ isAuth }) {
    return (
        <div className="hearts">
            <Hearts color='#FF477E'/>
        </div>
    )
}