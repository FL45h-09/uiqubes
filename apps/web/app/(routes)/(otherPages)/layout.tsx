
export default function innerLayout({ children, }: Readonly<{children: React.ReactNode;}>){
    return(
        <section className="py-10">
            <div className='container'>{children}</div>
        </section>
    )
}