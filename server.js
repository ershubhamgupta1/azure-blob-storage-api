// app.js
const express = require('express');
const multer = require('multer');
const { BlobServiceClient } = require('@azure/storage-blob');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Set up Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: { fileSize: 50 * 1024 * 1024 } // 50 MB limit
});

// Azure Blob Storage client
const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);
const containerClient = blobServiceClient.getContainerClient(process.env.AZURE_STORAGE_CONTAINER_NAME);

// API endpoint for uploading an image
app.post('/upload', upload.single('image'), async (req, res) => {
    console.log('enter in file upload=====', req.file, req.image, req.body);
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        const blobName = req.file.originalname; // Use the original file name
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);

        // Upload the image
        await blockBlobClient.upload(req.file.buffer, req.file.size);
        res.status(200).send(`File uploaded successfully: ${blobName}`);
    } catch (error) {
        console.error('Error uploading file:', error.message);
        res.status(500).send('Error uploading file.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
