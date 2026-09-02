import { useState } from 'react';

function Register() {
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [isUserValid, setIsUserValid] = useState<boolean>(true);

    const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const apiUrl = import.meta.env.VITE_GO_API_URL + "/register";
        try {
            const res = await fetch(apiUrl, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
             body: JSON.stringify({
                email: email,
                password: password
             }),
            });
            switch (res.status) {
                case 200:
                    window.location.href = "/";
                    break;
                case 401:
                    setIsUserValid(false)
                    return;
                default:
                    throw new Error(`API error: ${res.status}`)
                    break;
            }
            } catch (err: any) {
                setError(err.message);
            }
        };

    return (
        <form onSubmit={handleRegister} className='flex flex-col items-center w-full pt-10'>
            <div id="login-fields" className="w-full max-w-[40vw] flex gap-2 p-3">
                <input
                    type="text"
                    id="email"
                    placeholder="Email Address"
                    required={true}
                    className='w-full px-2.5 py-2 text-sm bg-white rounded-lg border-1 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 peer'
                    onChange={updateEmail}
                    />
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required={true}
                    className='w-full px-2.5 py-2 text-sm bg-white rounded-lg border-1 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 peer'
                    onChange={updatePassword}
                    />
            </div>
            <button className='px-5 py-1 mt-3 mb-1 max-w-md font-bold text-xl  text-green-700 border-3 border-green-700 rounded-3xl hover:bg-green-700 hover:text-white active:text-white active:bg-green-900 active:border-green-900 transition-colors duration-300 ' type="submit">Register</button>
        </form>
    );
}

export default Register;