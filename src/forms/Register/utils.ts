export const checkPhotoSize = (photo: File) =>
  new Promise(resolve => {
    const image = new Image()

    image.onload = () => {
      resolve({
        height: image.naturalHeight,
        width: image.naturalWidth,
      })
    }
    image.src = URL.createObjectURL(photo)
  })
