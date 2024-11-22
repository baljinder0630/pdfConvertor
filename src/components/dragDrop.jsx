import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["DOCX"];

function DragDrop() {
    const [file, setFile] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error handling

    const handleChange = (uploadedFile) => {
        setFile(uploadedFile);
        setError(null); // Clear errors on new file upload
    };

    const handleConvert = async (e) => {
        e.preventDefault();
        setIsProcessing(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await fetch("http://localhost:3000/api/convertFile", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to convert the file. Please try again.");
            }

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "converted.pdf";
            a.click();

            setFile(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-green-50 to-green-100 border border-green-300 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
                Drag & Drop Your DOCX File
            </h2>
            <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                classes="flex flex-col items-center justify-center p-6 border-2 border-dashed border-green-400 rounded-lg bg-white hover:shadow-lg transition-shadow cursor-pointer"
            />
            {file && (
                <div className="mt-6">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">File Metadata</h3>
                        <div className="text-sm text-gray-600 space-y-1">
                            <p>
                                <strong className="text-gray-800">Name:</strong> {file.name}
                            </p>
                            <p>
                                <strong className="text-gray-800">Size:</strong>{" "}
                                {(file.size / 1024).toFixed(2)} KB
                            </p>
                            <p>
                                <strong className="text-gray-800">Type:</strong> {file.type}
                            </p>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={`mt-4 w-full px-4 py-2 text-white font-semibold rounded-lg shadow ${isProcessing
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-500 hover:bg-green-600"
                            }`}
                        disabled={isProcessing}
                        onClick={handleConvert}
                    >
                        {isProcessing ? "Converting..." : "Convert to PDF"}
                    </button>
                </div>
            )}
            {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-300 text-red-700 rounded">
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
}

export default DragDrop;