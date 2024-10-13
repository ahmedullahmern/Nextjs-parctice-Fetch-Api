import Link from "next/link";


export default function Dashboard() {
    return (
        <div className="flex justify-center flex-col items-center">
            <h1 className="text-center text-5xl font-bold p-10 text-blue-400">
                Dashboard
            </h1>
            <Link href={"/dashboard/profile"} className=" mb-10 justify-center hover:bg-teal-100  items-center border border-teal-400 rounded-lg py-2 px-3">
                Go to Profile
            </Link>
            <Link href={"/dashboard/settings"} className="justify-center hover:bg-teal-100  items-center border border-teal-400 rounded-lg py-2 px-3">
                Go to Settingsnpm run dev
            </Link>
        </div>
    )
}