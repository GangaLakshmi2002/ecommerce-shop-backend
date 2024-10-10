const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "djjavu7wr",
  // api_key: "278779774184511",
  api_key: "939652896561524",
  // api_secret:"bwJF5e6Fd6Kc61bau6zpBp_Phj0",
  api_secret :"xYCtym4GIXpOf4O_koPn-x24w58"
});

const storage = new multer.memoryStorage();

// async function imageUploadUtil(file) {
//   // console.log("file", file);
//   try {
//     const result = await cloudinary.uploader.upload(file, {
//       resource_type: "auto",
//       // timeout: 300000,  // Timeout in case large files take longer 5min
//     });
//     return result;
//   } catch (error) {
//     console.error("Cloudinary Upload Error", error);
//     throw error;
//   }
// }

const imageUploadUtil = async(file) => {
  try {
    const url = `https://api.cloudinary.com/v1_1/djjavu7wr/image/upload`
// const uploadImage  = async(image) => {
    const formData = new FormData()
    formData.append("file",file)
    formData.append("upload_preset","mern_product")
    

    const dataResponse = await fetch(url,{
        method : "post",
        body : formData
    })

    return dataResponse.json()
  } catch (error) {
    console.log(error)
  }
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };