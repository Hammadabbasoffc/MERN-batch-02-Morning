import multer from "multer";
import path from "path";
import fs from "fs";

if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads");
}

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Files will be uploaded to 'uploads' folder
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        // Generate unique filename: fieldname-timestamp-originalname
        const uniqueName = `${file.fieldname}-${Date.now()}${path.extname(
            file.originalname
        )}`;
        cb(null, uniqueName);
    },
});

// File filter (optional) - to accept only specific file types
const fileFilter = (req, file, cb) => {
    // Accept common file types (images, documents, etc.)
    const allowedMimes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    console.log("File MIME type:", file.mimetype); // Debugging line to check the MIME type of the uploaded file
    console.log("File MIME type: --->", file);
    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only images and documents are allowed."));
    }
};

// Configure multer
const upload = multer({
    storage: storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    },
});

export default upload;
