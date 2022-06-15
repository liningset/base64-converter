import asciiModule from "./ascii-table.js";
import base64Module from "./base64-table.js";

const inputField = document.querySelector("#input-area");
const outputField = document.querySelector("#output-area");
const select = document.querySelector("select");
const asciiT = asciiModule.ASCII;
const base64T = base64Module;

function encode() {
  const binaryOfAsciiText = asciiLookup(inputField.value, "toencode");
  const regroupedBinary = regroupBits(binaryOfAsciiText, "8to6bit");
  const binaryOfBase64Text = base64Lookup(regroupedBinary, "tobase64");
  const paddedBinaryOfBase64Text = handlePadding(binaryOfBase64Text, "add");

  outputField.value = paddedBinaryOfBase64Text;
}

function decode() {
  const paddlessText = handlePadding(inputField.value, "remove");
  const binaryOfBase64Text = base64Lookup(paddlessText, "frombase64");
  const regroupedBinary = regroupBits(binaryOfBase64Text, "6to8bit");
  const asciiConvertedBinary = asciiLookup(regroupedBinary, "todecode");

  outputField.value = asciiConvertedBinary;
}

function asciiLookup(input, type) {
  if (type === "toencode") {
    const arr = [];
    const text = input;
    for (let char of text) {
      asciiT.forEach((asciiCell) => {
        const binValue = asciiCell[1];
        const asciiValue = asciiCell[2];

        if (asciiValue === char) arr.push(binValue);
      });
    }
    return arr.join("");
  } else if (type === "todecode") {
    let arr = [];
    let bytes = input;
    bytes.forEach((byte) => {
      asciiT.forEach((cell) => {
        const binValue = cell[1];
        const asciiValue = cell[2];

        if (binValue === byte) arr.push(asciiValue);
      });
    });
    return arr.join("");
  }
}

function regroupBits(input, type) {
  //eightBitToSixBit
  if (type === "8to6bit") {
    let bin = input;
    let binArr = bin.split("");
    let sixBitsArr = bin.match(/\d{6}/g);
    let sixBitsStr = sixBitsArr.join("");
    let sixBitsArr2 = sixBitsStr.split("");
    let remainingBits = binArr
      .filter((char, index) => sixBitsArr2[index] == null)
      .join("");
    let newGroup = remainingBits;
    (function extendbin() {
      if (remainingBits.length !== 0) {
        while (newGroup.length !== 6) {
          newGroup = newGroup.concat("0");
        }
      }
    })();

    return [...sixBitsArr, newGroup];
  } else if (type === "6to8bit") {
    let bin = input;
    let eightbits = bin.match(/\d{8}/g);
    return eightbits;
  }
}

function handlePadding(text, type) {
  if (type === "add") {
    if (text.length % 4 !== 0) {
      let textArr = text.split("");
      while (textArr.length % 4 !== 0) {
        textArr.push("=");
      }
      return textArr.join("");
    } else {
      return text;
    }
  } else if (type === "remove") {
    if (text.includes("=")) {
      let textArr = text.split("");
      return textArr.filter((c) => c !== "=").join("");
    } else return text;
  }
}

function base64Lookup(input, type) {
  if (type === "tobase64") {
    let arr = [];
    let bins = input;
    bins.forEach((bin) => {
      base64T.forEach((base64Cell) => {
        let binValue = base64Cell[0];
        let base64Value = base64Cell[1];

        if (bin === binValue) arr.push(base64Value);
      });
    });
    return arr.join("");
  } else if (type === "frombase64") {
    let arr = [];
    let text = input;
    let textArr = text.split("");
    textArr.forEach((char) => {
      base64T.forEach((base64Cell) => {
        let binValue = base64Cell[0];
        let base64Value = base64Cell[1];

        if (char === base64Value) arr.push(binValue);
      });
    });
    return arr.join("");
  }
}

inputField.addEventListener("input", () => {
  if (inputField.value != "") {
    select.value === "encode" ? encode() : decode();
  } else outputField.value = "";
});

select.addEventListener("input", () => {
  if (inputField.value != "") {
    select.value === "encode" ? encode() : decode();
  } else outputField.value = "";
});
