import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="h-screen w-64 fixed top-0 left-0 bg-gray-800 text-white p-5">
            <ul className='space-y-4'>
                <li>
                    <Link to="/" className="text-white no-underline">Dashboard</Link>
                </li>
                <li>
                    <Link to="/goods" className="text-white no-underline">Kelola Barang</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;