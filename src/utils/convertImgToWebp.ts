const convertImgToWebp = async (imageFile: File) => {
  return new Promise((resolve) => {
    let ogSrc = URL.createObjectURL(imageFile);
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let image = new Image();
    image.src = ogSrc;

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx?.drawImage(image, 0, 0);

      let webpImage = canvas.toDataURL('image/webp');

      let blobBin = atob(webpImage.split(',')[1]);
      let _arr = [];

      for (let i = 0; i < blobBin.length; i++) _arr.push(blobBin.charCodeAt(i));

      let webpFile = new File(
        [new Uint8Array(_arr)],
        imageFile.name.split('.')[0] + '.webp',
        { type: 'image/webp' }
      );

      resolve(webpFile);
    };
  });
};

export default convertImgToWebp;
