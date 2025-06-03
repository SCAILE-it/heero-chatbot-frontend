export const convertFileToBase64 = (
  file: File
): Promise<{ name: string; base64: string }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve({ name: file.name, base64: reader.result as string });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
