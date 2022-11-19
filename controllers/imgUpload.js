// Libraries for file path and file system
const path = require(`path`);
const fs = require(`fs`);

// Import status codes
const { StatusCodes } = require(`http-status-codes`);

// Import errors
const { BadRequestError } = require(`../errors`);

// Import cloud service
const cloudinary = require(`cloudinary`).v2;

// Function to save uploaded file to the server
const uploadImgLocal = async (req, res, next) => {
  // Check the file been added
  if (!req.files) throw new BadRequestError(`No file uploaded`);

  // Store the image
  let img = req.files.image;

  // Check file type
  if (!img.mimetype.startsWith(`image`))
    throw new BadRequestError(`Please upload image file`);

  // Set max size and check it
  const maxSize = 1024 * 1024;
  if (!img.size > maxSize) throw new BadRequestError(`Max image size is 1 Mb`);

  // Set image path
  const imagePath = path.join(__dirname, `../public/uploads/`, img.name);

  //   Try to save file
  await img.mv(imagePath);

  //   Return the path to the file
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${img.name}` } });
};

// Function to push file to the cloud
const uploadImgCloud = async (req, res, next) => {
  // File path
  const { tempFilePath, size, mimetype } = req?.files?.image;

  // No file uploaded
  if (!tempFilePath) throw new BadRequestError(`No file uploaded`);

  // File type check
  if (!mimetype.startsWith(`image`))
    throw new BadRequestError(`Please upload image file`);

  // Size check
  const maxSize = 1024 * 1024;
  if (size > maxSize) throw new BadRequestError(`Max image size is 1 Mb`);

  // Upload file to the cloud
  const result = await cloudinary.uploader.upload(tempFilePath, {
    use_filename: true,
    folder: `file-upload`,
  });

  console.log(result);

  // Delete from the local
  fs.unlinkSync(tempFilePath);

  //   Return the link to the file on the cloud
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

module.exports = { uploadImgLocal, uploadImgCloud };
