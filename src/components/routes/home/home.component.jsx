import Directory from '../../directory/directory.component'
import categories from '../../../categories.json'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Outlet />
            <Directory categories={categories} />
        </div >
    )
}

export default Home