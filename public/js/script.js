// URL for the upload img post request
const imgUploadUrl = `/uploadImg`;
// URL for the API requests
const apiUrl = `/api/v1`;

// Variable for the image file
let imgSrc = ``;

// DOM elements
const nameInput = document.querySelector(`#name`);
const descrInput = document.querySelector(`#description`);
const imgInput = document.querySelector(`#image`);
const form = document.querySelector(`#fileForm`);
const dataContainer = document.querySelector(`.sectionData`);

// Logic for the file input element
imgInput.addEventListener(`change`, async (e) => {
  // Get uploaded file
  const file = e.target.files[0];

  //   Create "form" object
  const formData = new FormData();

  //   Add image to this "form"
  formData.append(`image`, file);

  //   Try to get img url data, and catch potential errors
  try {
    // Destructure the data object, get url
    const {
      data: {
        image: { src: imgUrl },
      },
    } = await axios.post(`${imgUploadUrl}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Set ImgSrc variable
    imgSrc = imgUrl;
  } catch (error) {
    // Clear ImgSrc variable
    imgSrc = null;

    // Error handling
    console.log(error);
  }
});

// Logic for the form submit
form.addEventListener(`submit`, async (e) => {
  // Prevent default logic
  e.preventDefault();

  // Data
  const nameValue = nameInput.value;
  const descrValue = descrInput.value;

  //  Try to add Inquiry to the DB
  try {
    const newInquiryData = {
      name: nameValue,
      description: descrValue,
      image: imgSrc,
    };

    // Make post request to the DB
    const newEntry = await axios.post(apiUrl, newInquiryData);

    // Update the content on the page
    fetchInquiries();
  } catch (error) {
    //   Log the error
    console.log(error);
  }
});

// Function to fetch and visualise the data from the DB
const fetchInquiries = async () => {
  // Prepare variable to store data HTML
  let inquiriesDOM = ``;
  // Try to fetch data and update the DOM
  try {
    // Get all inquiries from the DB
    const { data: inquiries } = await axios.get(apiUrl);

    //   If there are no entries to show
    if (!inquiries)
      inquiriesDOM = `<div class="emptyContainer">
    <h2>There are no inquiries to show...yet</h2>
    </div>`;
    else {
      // Create HTML for the data
      inquiriesDOM = inquiries
        .map((inquiry) => {
          return `<article class="inquiry"> 
            <img src="${inquiry.image}" alt="${inquiry.name}" class="image" width="300px" height="300px">
                <footer>
                    <h4>${inquiry.name}</h4>
                    <p>${inquiry.description}</p>
                </footer>
            </article>`;
        })
        .join(``);
    }

    // Fill the container
    dataContainer.innerHTML = inquiriesDOM;
  } catch (error) {
    // Catch and log error
    console.log(error);
  }
};

// Show current inquiries on initial page load
fetchInquiries();
