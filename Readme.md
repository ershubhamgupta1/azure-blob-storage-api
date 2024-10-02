# Azure Blob Storage Image Upload API

This is a simple Node.js API that allows users to upload images to Azure Blob Storage. The API uses Express for handling HTTP requests and Multer for managing file uploads.

## Features

- Upload images to Azure Blob Storage.
- Handles single file uploads.
- Returns the uploaded file name upon successful upload.

## Technologies Used

- Node.js
- Express
- Multer
- @azure/storage-blob
- dotenv

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- An **Azure account** and a Blob Storage container set up. You will need the connection string for your storage account.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ershubhamgupta1/azure-blob-storage-api
   cd azure-blob-storage-api


2) Install the necessary dependencies:
    
    npm install

### Env configuration

Create a .env file in the root directory of the project and add your Azure Blob Storage connection string and container name:

AZURE_STORAGE_CONNECTION_STRING=your_connection_string
AZURE_STORAGE_CONTAINER_NAME=your_container_name

Replace your_connection_string with your actual Azure Blob Storage connection string and your_container_name with the name of your container.

### Start the server

node server.js



### Test the api 

You can test it using curl command : 

curl -X POST http://localhost:8000/upload -F "image=@/path/to/your/image.jpg"