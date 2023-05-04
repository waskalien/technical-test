export function getMonths(count = 20) {
  const arr = [];
  var d = new Date();
  for (let i = 0; i < count; i++) {
    arr.push(new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() - i, 1)));
  }
  return arr;
}

export function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export const fileToBase64 = (file) => {
  return new Promise((resolve) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    } else {
      console.log("no file")
    }
  });
};
