import DragDrop from "./dragDrop";

function Body() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
            <header className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800">DOCX To PDF</h1>
                <p className="mt-2 text-gray-600">
                    Upload your DOCX files and view metadata instantly!
                </p>
            </header>
            <main className="w-full max-w-2xl px-4">
                <DragDrop />
            </main>
        </div>
    );
}

export default Body;
