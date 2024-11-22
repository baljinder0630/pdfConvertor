import DragDrop from "./dragDrop";

function Body() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800">File Upload Portal</h1>
                <p className="mt-2 text-gray-600">
                    Upload your DOCX files and view metadata instantly!
                </p>
            </header>
            <main className="w-full max-w-2xl px-4">
                <DragDrop />
            </main>
            <footer className="mt-12 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} My File Uploader. All rights reserved.
            </footer>
        </div>
    );
}

export default Body;
