import {v2 as cloudinary} from cloudinary 
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUND_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});
const uploadOnCloudinary=async (localFilePath)=>{
 try {
    if (!localFilePath) return null
    // Upload the file 
    const response =await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto",

        
    })
    // File has uploaded successfully
        console.log("file is uploaded on cloudinary", response.url)
        return response
 } catch (error) {
    fs.unlinkSync(localFilePath) // remove the locally saved  Temporary file as the upload fails
    return null 
    
    
 }
}




export {uploadOnCloudinary}