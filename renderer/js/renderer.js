const form = document.querySelector('#img-form');
const img = document.querySelector('#img');
const outputPath = document.querySelector('#output-path');
const filename = document.querySelector('#filename');
const heightInput = document.querySelector('#height');
const widthInput = document.querySelector('#width');

const loadImage =  (e) => {
    const file = e.target.files[0];

    if(!isFileImage(file)) {
        alert('Please select an image');
        return;
    }

    const image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = () => {
        const { height, width } = image;
        heightInput.value = height;
        widthInput.value = width;
        URL.revokeObjectURL(image.src);
    }

    form.style.display = 'block';
    filename.innerText = file.name;
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //     const img = document.createElement('img');
    //     img.src = reader.result;
    //     document.querySelector('#img-container').appendChild(img);
    // }
}

const isFileImage = (file) => {
    const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return file && acceptedImageTypes.includes(file['type']);
}


img.addEventListener('change', loadImage);