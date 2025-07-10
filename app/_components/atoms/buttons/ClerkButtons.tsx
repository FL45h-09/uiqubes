import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export const ClerkButtons = () => {
  return (
    <>
        <SignedOut>
            <div className="flex gap-3 text-[13px] text-white">
                <SignInButton />
                <SignUpButton>
                    <button className="bg-[#6c47ff] text-white hover:bg-white hover:text-[#6c47ff] transition-all rounded-full font-normal px-5 py-1.5 cursor-pointer">
                    Sign Up
                    </button>
                </SignUpButton>
            </div>
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </>
  )
}
