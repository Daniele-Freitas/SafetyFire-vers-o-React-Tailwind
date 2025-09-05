import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import UserOptions from './userOptions';

export default function UserIcon() {

    const [isOpen,setIsOpen] = useState(false);

    return (
        <div className="mt-1 h-full lg:mr-5  relative hidden lg:block"> {/* Use a div wrapper para o posicionamento absoluto */}
            <button className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <FaUser size={25} />
            </button>
            
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg">
                    <UserOptions />
                </div>
            )}
        </div>
    );
}
