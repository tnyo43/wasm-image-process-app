import { swap_color_channels } from '../pkg/image_process_app';

window.onload = () => {
  const imageInput = document.getElementById('input-image');
  console.log(imageInput);

  imageInput.addEventListener('change', (event) => {
    const image = new Image();
    image.onload = () => {
      const { width, height } = image;

      const canvas = document.getElementById('original-canvas');
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(image, 0, 0, width, height);
      const { data } = canvas
        .getContext('2d')
        .getImageData(0, 0, width, height);

      const converted = swap_color_channels(data, width, height);
      const convertedImage = new ImageData(
        new Uint8ClampedArray(converted),
        width
      );
      const convertedCanvas = document.getElementById('converted-canvas');
      convertedCanvas.width = width;
      convertedCanvas.height = height;
      convertedCanvas
        .getContext('2d')
        .putImageData(convertedImage, 0, 0, 0, 0, width, height);
    };

    const reader = new FileReader();
    reader.onload = () => {
      image.src = reader.result;
    };

    reader.readAsDataURL(event.target.files[0]);
  });
};
