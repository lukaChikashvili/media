import { SignUp } from "@clerk/nextjs";


export default function page() {
    return (
    <div className="h-[calc(100vh-96px)] flex items-center justify-center">
       <div className="w-full max-w-md p-4">
        <SignUp />
      </div>
    </div>
    )
}