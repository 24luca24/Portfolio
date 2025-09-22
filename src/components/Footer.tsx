interface FooterProps {
    city: string;
    address: string;
    phoneNumber: string;
}

function Footer({ city, address, phoneNumber}: FooterProps) {
    return (
        <section className="bg-gray-100 mt-16">
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-gray-700">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <p className="text-lg font-semibold">Contact Information</p>
                    <p>{address}, {city}</p>
                    <p>Phone: {phoneNumber}</p>
                </div>
                <div className="text-center md:text-right text-sm">
                    <p>&copy; {new Date().getFullYear()} Luca Airaghi. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;