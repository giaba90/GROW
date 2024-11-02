import React from 'react';

const Navbar: React.FC<{ items: { id: string; uri: string; label: string }[] }> = ({ items }) => {
    return (
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Menu Items */}
                <ul className="flex space-x-4">
                    {items.map((item) => (
                        <NavBarItem key={item.id} url={item.uri} label={item.label}>
                        </NavBarItem>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

const NavBarItem: React.FC<{ url: string; label: string }> = ({ url, label }) => {
    return (
        <li>
            <a href={`/page${url}`} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {label}
            </a>
        </li>
    );
}

export default Navbar;
