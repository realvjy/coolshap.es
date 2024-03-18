// 18 Nov, 2022

export const handleDownloadPNG = (imgRef, canvasRef) => {
  const canvasS = canvasRef.current;
};

// Get image and return image data to add on figma

export const getImageData = (image, canvasRef) => {
  const newSize = 800;
  const canvas = canvasRef.current;

  // Set canvas dimensions
  canvas.width = newSize;
  canvas.height = newSize;

  const context = canvas.getContext("2d");

  // Calculate scaling factor
  const scaleFactor = newSize / image.width;

  // Calculate destination width and height
  const newWidth = image.width * scaleFactor;
  const newHeight = image.height * scaleFactor;

  // Calculate offsets to center the image
  const offsetX = (newSize - newWidth) / 2;
  const offsetY = (newSize - newHeight) / 2;

  // Clear canvas and draw the image with calculated dimensions
  context.clearRect(0, 0, newSize, newSize);
  context.drawImage(image, offsetX, offsetY, newWidth, newHeight);

  return {
    imageData: context.getImageData(0, 0, newSize, newSize),
    canvas,
    context,
  };
};

// Load image from the view
export const loadImage = async (src, imgRef) => {
  return new Promise((resolve, reject) => {
    const img = imgRef.current;
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => {
      const error = new Error(`Error loading image from ${src}`);
      reject(error);
    };
    img.src = src;
  });
};

// Encode image to object to upload on figma
export async function encodeImage(canvas, ctx, imageData) {
  ctx.putImageData(imageData, 0, 0);

  return await new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      const reader = new FileReader();
      reader.onload = () => resolve(new Uint8Array(reader.result));
      reader.onerror = () => reject(new Error("Could not read from blob"));
      reader.readAsArrayBuffer(blob);
    });
  });
}

export const unit8toPng = (imgData) => {
  const blob = new Blob([imgData], { type: 'image/png' });
  const dataUrl = URL.createObjectURL(blob);
  return dataUrl
};
// Set Image on Figma convas
export const setBg = async (imageData) => {
  parent.postMessage(
    {
      pluginMessage: {
        type: "set-bg",
        data: { imageData },
      },
    },
    "*"
  );
};



export const svgBase64 = (svg) => {
  var base64 = btoa(svg);
  return `data:image/svg+xml;base64,${base64}`;
};

// Fix Node Type Issue
// Group Node and Section not work properly with fill
export const checkNode = (node) => {
  const type = node.type;

  if (type === "TEXT") {
    return false;
  }
  return true;
};

export function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomFloat(min, max) {
  return Math.random() * (min - max) + max;
}

export function rescaleFactor(dimension) {
  switch (dimension) {
    case 800:
      return 0.5;
      break;

    default:
      return 1;
      break;
  }
}

export function getRandomXYPoint() {
  return {
    x: getRandomNumberBetween(0, 1600 / 2),
    y: getRandomNumberBetween(0, 1600 / 2),
  };
}

export function getRandomShapeDimension(
  MIN_SHAPE_SIZE = 0.5,
  MAX_SHAPE_SIZE = 0.8
) {
  return getRandomNumberBetween(1600 * MIN_SHAPE_SIZE, 1600 * MAX_SHAPE_SIZE);
}

// adjust noise
export function adjustNoiseParameters(value) {
  const baseFrequencyRange = [0.1, 0.7]; // Range of baseFrequency values
  const numOctavesRange = [6, 18]; // Range of numOctaves values

  // Reverse the scaling logic for baseFrequency
  var baseFrequency =
    (baseFrequencyRange[1] - baseFrequencyRange[0]) * ((16 - value) / 16) +
    baseFrequencyRange[0];

  // Reverse the scaling logic for numOctaves
  var numOctaves = Math.floor(
    (numOctavesRange[1] - numOctavesRange[0]) * ((18 - value) / 18) +
    numOctavesRange[0]
  );

  if (value === 0) {
    baseFrequency = 0;
    numOctaves = 0;
  }
  // Generate a random seed value
  const seed = Math.floor(Math.random() * 1000);

  return { baseFrequency, numOctaves, seed };
}


export const convertToCamelCase = (inputString) => {
  // Remove leading numbers, symbols, and hyphens
  if (!inputString) {
    return "";
  };
  let cleanedString = inputString
    .replace(/^[^a-zA-Z_]+/, "")
    .replace(/[^a-zA-Z0-9_]+/g, "");

  // Split the string into words
  const words = cleanedString.split(/[\s-_]+/);

  // Capitalize the first letter of each word and join with underscores
  const camelCaseString = words
    .map((word, index) => {
      return index === 0
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("_");

  return camelCaseString;

}