/**
 * zh-to-number 0.0.1
 * Author Condor Hero
 * License MIT
 * ©️ 2023
 * Homepage https://github.com/condorheroblog/number-zh/blob/main/README.md
 */

var __ZH_TO_NUMBER__ = (function (exports) {
	'use strict';

	var version = "0.0.1";

	function checkCharacters(targetString, comparisonString) {
	  for (let i = 0; i < targetString.length; i++) {
	    const character = targetString[i];
	    if (!comparisonString.includes(character)) {
	      return false;
	    }
	  }
	  return true;
	}

	function stringAddition(string1, string2) {
	  const bigInt1 = BigInt(string1);
	  const bigInt2 = BigInt(string2);
	  return (bigInt1 + bigInt2).toString();
	}

	const ZH_CN_LOWER_CASE_DIGITS_LIST = ["", "\u5341", "\u767E", "\u5343"];
	const ZH_CN_LOWER_CASE_MAGNITUDE_LIST = ["", "\u4E07", "\u4EBF", "\u5146"];
	const ZH_CN_LOWER_CASE_MINUS_SIGN = "\u8D1F";
	const ZH_CN_LOWER_CASE_DECIMAL_POINT = "\u70B9";
	const ZH_CN_LOWER_CASE_BASE_CHINESE_NUMERALS = ["\u96F6", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D"];
	const ZH_CN_UPPER_CASE_DIGITS_LIST = ["", "\u62FE", "\u4F70", "\u4EDF"];
	const ZH_CN_UPPER_CASE_MAGNITUDE_LIST = ["", "\u4E07", "\u4EBF", "\u5146"];
	const ZH_CN_UPPER_CASE_MINUS_SIGN = "\u8D1F";
	const ZH_CN_UPPER_CASE_DECIMAL_POINT = "\u70B9";
	const ZH_CN_UPPER_CASE_BASE_CHINESE_NUMERALS = ["\u96F6", "\u58F9", "\u8D30", "\u53C1", "\u8086", "\u4F0D", "\u9646", "\u67D2", "\u634C", "\u7396"];
	const ZH_TW_LOWER_CASE_DIGITS_LIST = ["", "\u5341", "\u767E", "\u5343"];
	const ZH_TW_LOWER_CASE_MAGNITUDE_LIST = ["", "\u842C", "\u5104", "\u5146"];
	const ZH_TW_LOWER_CASE_MINUS_SIGN = "\u8CA0";
	const ZH_TW_LOWER_CASE_DECIMAL_POINT = "\u9EDE";
	const ZH_TW_LOWER_CASE_BASE_CHINESE_NUMERALS = ["\u96F6", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D"];
	const ZH_TW_UPPER_CASE_DIGITS_LIST = ["", "\u62FE", "\u4F70", "\u4EDF"];
	const ZH_TW_UPPER_CASE_MAGNITUDE_LIST = ["", "\u842C", "\u5104", "\u5146"];
	const ZH_TW_UPPER_CASE_MINUS_SIGN = "\u8CA0";
	const ZH_TW_UPPER_CASE_DECIMAL_POINT = "\u9EDE";
	const ZH_TW_UPPER_CASE_BASE_CHINESE_NUMERALS = ["\u96F6", "\u58F9", "\u8CB3", "\u53C3", "\u8086", "\u4F0D", "\u9678", "\u67D2", "\u634C", "\u7396"];
	const RESOURCES = {
	  "zh-CN-lowercase": {
	    digitsList: ZH_CN_LOWER_CASE_DIGITS_LIST,
	    magnitudeList: ZH_CN_LOWER_CASE_MAGNITUDE_LIST,
	    minusSign: ZH_CN_LOWER_CASE_MINUS_SIGN,
	    decimalPoint: ZH_CN_LOWER_CASE_DECIMAL_POINT,
	    baseNumerals: ZH_CN_LOWER_CASE_BASE_CHINESE_NUMERALS
	  },
	  "zh-CN-uppercase": {
	    digitsList: ZH_CN_UPPER_CASE_DIGITS_LIST,
	    magnitudeList: ZH_CN_UPPER_CASE_MAGNITUDE_LIST,
	    minusSign: ZH_CN_UPPER_CASE_MINUS_SIGN,
	    decimalPoint: ZH_CN_UPPER_CASE_DECIMAL_POINT,
	    baseNumerals: ZH_CN_UPPER_CASE_BASE_CHINESE_NUMERALS
	  },
	  "zh-TW-lowercase": {
	    digitsList: ZH_TW_LOWER_CASE_DIGITS_LIST,
	    magnitudeList: ZH_TW_LOWER_CASE_MAGNITUDE_LIST,
	    minusSign: ZH_TW_LOWER_CASE_MINUS_SIGN,
	    decimalPoint: ZH_TW_LOWER_CASE_DECIMAL_POINT,
	    baseNumerals: ZH_TW_LOWER_CASE_BASE_CHINESE_NUMERALS
	  },
	  "zh-TW-uppercase": {
	    digitsList: ZH_TW_UPPER_CASE_DIGITS_LIST,
	    magnitudeList: ZH_TW_UPPER_CASE_MAGNITUDE_LIST,
	    minusSign: ZH_TW_UPPER_CASE_MINUS_SIGN,
	    decimalPoint: ZH_TW_UPPER_CASE_DECIMAL_POINT,
	    baseNumerals: ZH_TW_UPPER_CASE_BASE_CHINESE_NUMERALS
	  },
	  "zh-HK-lowercase": {
	    digitsList: ZH_TW_LOWER_CASE_DIGITS_LIST,
	    magnitudeList: ZH_TW_LOWER_CASE_MAGNITUDE_LIST,
	    minusSign: ZH_TW_LOWER_CASE_MINUS_SIGN,
	    decimalPoint: ZH_TW_LOWER_CASE_DECIMAL_POINT,
	    baseNumerals: ZH_TW_LOWER_CASE_BASE_CHINESE_NUMERALS
	  },
	  "zh-HK-uppercase": {
	    digitsList: ZH_TW_UPPER_CASE_DIGITS_LIST,
	    magnitudeList: ZH_TW_UPPER_CASE_MAGNITUDE_LIST,
	    minusSign: ZH_TW_UPPER_CASE_MINUS_SIGN,
	    decimalPoint: ZH_TW_UPPER_CASE_DECIMAL_POINT,
	    baseNumerals: ZH_TW_UPPER_CASE_BASE_CHINESE_NUMERALS
	  }
	};

	const positive = "\u6B63";

	function resolveOptions(options) {
	  const language = options.language ?? "zh-CN-lowercase";
	  if (!RESOURCES.hasOwnProperty(language)) {
	    throw new Error(`${language} does not appear in resources`);
	  }
	  const languageConfig = RESOURCES[language];
	  return {
	    thousandsSeparator: options.thousandsSeparator ?? false,
	    digitsList: options.digitsList ?? languageConfig.digitsList,
	    magnitudeList: options.magnitudeList ?? languageConfig.magnitudeList,
	    baseNumerals: options.baseNumerals ?? languageConfig.baseNumerals,
	    minusSign: options.minusSign ?? languageConfig.minusSign,
	    decimalPoint: options.decimalPoint ?? languageConfig.decimalPoint,
	    positive: options.positive ?? positive
	  };
	}

	function parseZhNumber(str, minusSign, decimalPoint) {
	  if (typeof str !== "string") {
	    throw new Error("Invalid input. Please provide a valid string.");
	  }
	  const result = {
	    sign: "",
	    integerPart: "",
	    fractionalPart: ""
	  };
	  if (str.startsWith(minusSign)) {
	    result.sign = "-";
	  } else {
	    result.sign = "+";
	  }
	  const parts = str.split(decimalPoint);
	  result.integerPart = parts[0];
	  if (parts.length > 1) {
	    result.fractionalPart = parts[1];
	  }
	  return result;
	}

	function zhToNumber(inputNumberString, options = {}) {
	  if (typeof inputNumberString === "string") {
	    inputNumberString = inputNumberString.trim();
	    const resolved = resolveOptions(options);
	    const comparisonString = [
	      resolved.minusSign,
	      ...resolved.baseNumerals,
	      ...resolved.digitsList,
	      ...resolved.magnitudeList,
	      resolved.decimalPoint,
	      resolved.positive
	    ];
	    const isChineseNumerals = checkCharacters(inputNumberString, comparisonString.join(","));
	    if (isChineseNumerals) {
	      if (inputNumberString.startsWith(`${resolved.digitsList[1]}`)) {
	        inputNumberString = resolved.baseNumerals[1] + inputNumberString;
	      } else {
	        if (inputNumberString.startsWith(`${resolved.positive}${resolved.digitsList[1]}`) || inputNumberString.startsWith(`${resolved.minusSign}${resolved.digitsList[1]}`)) {
	          inputNumberString = inputNumberString.charAt(0) + resolved.baseNumerals[1] + inputNumberString.slice(1);
	        }
	      }
	      if (inputNumberString === `${resolved.minusSign}${resolved.baseNumerals[0]}`) {
	        inputNumberString = inputNumberString.slice(1);
	      }
	      const { sign, integerPart, fractionalPart } = parseZhNumber(
	        inputNumberString,
	        resolved.minusSign,
	        resolved.decimalPoint
	      );
	      let arabicNumber = "";
	      let magnitudeNumber = "";
	      let digitsNumber = "";
	      let currentMagnitudeIndex = Infinity;
	      for (let i = 0; i < integerPart.length; i += 1) {
	        const currentChar = integerPart[i];
	        const charIndex = resolved.baseNumerals.indexOf(currentChar);
	        if (charIndex > -1) {
	          digitsNumber = String(charIndex);
	        } else {
	          const digitsIndex = resolved.digitsList.indexOf(currentChar);
	          if (digitsIndex > -1) {
	            digitsNumber += new Array(digitsIndex + 1).join("0");
	            magnitudeNumber = stringAddition(magnitudeNumber, digitsNumber);
	            digitsNumber = "";
	          } else {
	            const magnitudeIndex = resolved.magnitudeList.indexOf(currentChar);
	            if (magnitudeIndex > -1) {
	              magnitudeNumber = stringAddition(magnitudeNumber, digitsNumber);
	              const multipleZero = new Array(1 + magnitudeIndex * 4).join("0");
	              if (currentMagnitudeIndex <= magnitudeIndex) {
	                arabicNumber = stringAddition(arabicNumber, magnitudeNumber) + multipleZero;
	              } else {
	                arabicNumber = stringAddition(arabicNumber, `${magnitudeNumber}${multipleZero}`);
	              }
	              currentMagnitudeIndex = magnitudeIndex;
	              magnitudeNumber = "";
	              digitsNumber = "";
	            }
	          }
	        }
	      }
	      arabicNumber = stringAddition(arabicNumber, stringAddition(magnitudeNumber, digitsNumber));
	      digitsNumber = "";
	      magnitudeNumber = "";
	      if (resolved.thousandsSeparator) {
	        arabicNumber = new Intl.NumberFormat("en-US").format(arabicNumber);
	      }
	      if (fractionalPart) {
	        arabicNumber += ".";
	        for (const char of fractionalPart) {
	          arabicNumber += resolved.baseNumerals.indexOf(char);
	        }
	      }
	      return sign === "-" ? `-${arabicNumber}` : arabicNumber;
	    } else {
	      return NaN;
	    }
	  } else {
	    return NaN;
	  }
	}

	exports.RESOURCES = RESOURCES;
	exports.checkCharacters = checkCharacters;
	exports.parseZhNumber = parseZhNumber;
	exports.positive = positive;
	exports.resolveOptions = resolveOptions;
	exports.stringAddition = stringAddition;
	exports.version = version;
	exports.zhToNumber = zhToNumber;

	return exports;

})({});