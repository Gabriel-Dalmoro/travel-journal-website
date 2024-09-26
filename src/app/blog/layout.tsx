export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <div>
                <section className=' bg-gray-100 p-16 text-center'>
                    <h2 className='text-5xl font-bold text-gray-800'>Blog</h2>
                </section>
            </div>

            {children}
        </section>
    );
}
