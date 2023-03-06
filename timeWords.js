function timeToWords(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
  
    if (hours === 0) {
      return "midnight";
    } else if (hours === 12) {
      return "noon";
    } else {
      const meridian = hours >= 12 ? "pm" : "am";
      const hour = hours % 12 || 12;
      const minuteWords = getMinuteWords(minutes);
  
      if (minuteWords) {
        return `${getHourWord(hour)} ${minuteWords} ${meridian}`;
      } else {
        return `${getHourWord(hour)} o'clock ${meridian}`;
      }
    }
  }
  
  function getHourWord(hour) {
    const hourWords = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve"
    };
  
    return hourWords[hour];
  }
  
  function getMinuteWords(minutes) {
    if (minutes === 0) {
      return "";
    } else if (minutes === 15) {
      return "quarter";
    } else if (minutes === 30) {
      return "half";
    } else if (minutes === 45) {
      return "quarter to";
    } else if (minutes < 30) {
      return `${getNumberWord(minutes)} minute${minutes !== 1 ? "s" : ""} past`;
    } else {
      const remainingMinutes = 60 - minutes;
      return `${getNumberWord(remainingMinutes)} minute${remainingMinutes !== 1 ? "s" : ""} to`;
    }
  }
  
  function getNumberWord(number) {
    const onesWords = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen"
    ];
  
    const tensWords = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty"
    ];
  
    if (number < 20) {
      return onesWords[number];
    } else {
      const tensDigit = Math.floor(number / 10);
      const onesDigit = number % 10;
      const onesWord = onesDigit > 0 ? `-${onesWords[onesDigit]}` : "";
      return `${tensWords[tensDigit]}${onesWord}`;
    }
  }

  console.log(timeToWords("13:44"))