const form = document.querySelector('#img-form');
const img = document.querySelector('#img');
const outputPath = document.querySelector('#output-path');
const filename = document.querySelector('#filename');
const heightInput = document.querySelector('#height');
const widthInput = document.querySelector('#width');

const loadImage =  (e) => {
    const file = e.target.files[0];

    if(!isFileImage(file)) {
        alertError('Please select an image');
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
    outputPath.innerText = path.join(os.homedir(), 'imageresizer');
}

const sendImage = (e) => {
    e.preventDefault();

    const width = widthInput.value;
    const height = heightInput.value;

    if(!img.files[0]) {
        alertError('Please select an image');
        return;
    }

    if(!width || !height) {
        alertError('Please enter width and height');
        return;
    }
}


const isFileImage = (file) => {
    const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return file && acceptedImageTypes.includes(file['type']);
}

const alertSuccess = (message) => {
    Toastify.toast({
        text: message,
        duration: 5000,
        close: false,
        style: {
            background: 'green',
            color: 'white',
            textAlign: 'center',
        },
    });
}

const alertError = (message) => {
    Toastify.toast({
        text: message,
        duration: 5000,
        close: false,
        style: {
            background: 'red',
            color: 'white',
            textAlign: 'center',
        },
    })
}

img.addEventListener('change', loadImage);
form.addEventListener('submit', sendImage);