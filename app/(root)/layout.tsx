import Navbar from "@/components/Navbar";

export const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
    <main className="font-work-sans">
        <Navbar />
        {children}
    </main>);
};

export default Layout;