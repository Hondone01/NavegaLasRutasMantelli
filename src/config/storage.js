import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './config';

export const uploadImage = async (file, imageName) => {
  const imageRef = ref(storage, `images/${imageName}`);
  await uploadBytes(imageRef, file);
  const url = await getDownloadURL(imageRef);
  return url;
};

