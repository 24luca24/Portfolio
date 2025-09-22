import Internships  from "../data/internships";

function Internship() {
    return (
        <section className="max-w-6xl mx-auto px-4 pb-8 pt-8">
            <span className="block w-full px-3 py-1 bg-indigo-100 rounded-lg mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3 mt-3 text-center">
                    Internships
                </h2>
            </span>
            <div className="space-y-8">
                {Internships.map((internship, index) => (
                    <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-indigo-300 hover:border-4">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{internship.role}</h3>
                        <p className="text-gray-700 mb-1"><strong>Company:</strong> {internship.company}</p>
                        <p className="text-gray-700 mb-1"><strong>Duration:</strong> {internship.duration}</p>
                        <p className="text-gray-700 mb-1"><strong>Technologies:</strong> {internship.technologies.join(", ")}</p>
                        <p className="text-gray-700 mt-2">{internship.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Internship;
