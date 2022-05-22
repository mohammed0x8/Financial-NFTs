export const isObject = (item) =>
  item && typeof item === "object" && !Array.isArray(item);

export const mergeDeep = (target, source) => {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

export const options = {
  alignLabels: false,
  grid: {
    vertLines: {
      visible: false,
    },
  },
  crosshair: {
    horzLine: {
      visible: false,
      labelVisible: true,
    },
    vertLine: {
      visible: true,
      labelVisible: true,
    },
  },
  timeScale: {
    rightOffset: 12,
    barSpacing: 3,
    fixLeftEdge: true,
    lockVisibleTimeRangeOnResize: true,
    rightBarStaysOnScroll: false,
    borderVisible: false,
    borderColor: "#fff000",
    visible: true,
    timeVisible: true,
    secondsVisible: false,
  },
  priceScale: {
    title: "Price",
    position: "left",
    autoScale: true,
    drawTicks: true,
    PriceLineSource: "LastVisible",
    priceRange: {
      minValue: 0,
      maxValue: 3,
    },
    borderColor: "#ffff",
    scaleMargins: {
      top: 0.3,
      bottom: 0.25,
    },
  },
  baseline: {
    baseValue: {
      type: "price",
      price: 1,
    },
    priceFormat: {
      type: "price",
      precision: 3,
      minMove: 0.001,
    },
  },
};

export const customDarkTheme = {
  layout: {
    backgroundColor: "#131722",
    lineColor: "#2B2B43",
    textColor: "#D9D9D9",
  },
  grid: {
    vertLines: {
      color: "#363c4e",
    },
    horzLines: {
      color: "#363c4e",
    },
  },
};

export const lightTheme = {
  layout: {
    backgroundColor: "#ccc",
    lineColor: "#2B2B43",
    textColor: "#191919",
  },
  grid: {
    vertLines: {
      color: "#000",
    },
    horzLines: {
      color: "#000",
    },
  },
};

export const colors = [
  "#008FFB",
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
  "#F86624",
  "#A5978B",
];
