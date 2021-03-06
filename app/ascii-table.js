const asciiModule = {
  _heading: [["HEX", "BIN", "Symbol", "Description"]],
  ASCII: [
    ["00", "00000000", "NUL", "Null char"],
    ["01", "00000001", "SOH", "Start of Heading"],
    ["02", "00000010", "STX", "Start of Text"],
    ["03", "00000011", "ETX", "End of Text"],
    ["04", "00000100", "EOT", "End of Transmission"],
    ["05", "00000101", "ENQ", "Enquiry"],
    ["06", "00000110", "ACK", "Acknowledgment"],
    ["07", "00000111", "BEL", "Bell"],
    ["08", "00001000", "BS", "Back Space"],
    ["09", "00001001", "HT", "Horizontal Tab"],
    ["0A", "00001010", "LF", "Line Feed"],
    ["0B", "00001011", "VT", "Vertical Tab"],
    ["0C", "00001100", "FF", "Form Feed"],
    ["0D", "00001101", "CR", "Carriage Return"],
    ["0E", "00001110", "SO", "Shift Out / X-On"],
    ["0F", "00001111", "SI", "Shift In / X-Off"],
    ["10", "00010000", "DLE", "Data Line Escape"],
    ["11", "00010001", "DC1", "Device Control 1 (oft. XON)"],
    ["12", "00010010", "DC2", "Device Control 2"],
    ["13", "00010011", "DC3", "Device Control 3 (oft. XOFF)"],
    ["14", "00010100", "DC4", "Device Control 4"],
    ["15", "00010101", "NAK", "Negative Acknowledgement"],
    ["16", "00010110", "SYN", "Synchronous Idle"],
    ["17", "00010111", "ETB", "End of Transmit Block"],
    ["18", "00011000", "CAN", "Cancel"],
    ["19", "00011001", "EM", "End of Medium"],
    ["1A", "00011010", "SUB", "Substitute"],
    ["1B", "00011011", "ESC", "Escape"],
    ["1C", "00011100", "FS", "File Separator"],
    ["1D", "00011101", "GS", "Group Separator"],
    ["1E", "00011110", "RS", "Record Separator"],
    ["1F", "00011111", "US", "Unit Separator"],
    ["20", "00100000", " ", "Space"],
    ["21", "00100001", "!", "Exclamation mark"],
    ["22", "00100010", '"', "Double quotes (or speech marks)"],
    ["23", "00100011", "#", "Number"],
    ["24", "00100100", "$", "Dollar"],
    ["25", "00100101", "%", "Per cent sign"],
    ["26", "00100110", "&", "&amp;", "Ampersand"],
    ["27", "00100111", "'", "Single quote"],
    ["28", "00101000", "(", "Open parenthesis (or open bracket)"],
    ["29", "00101001", ")", "Close parenthesis (or close bracket)"],
    ["2A", "00101010", "*", "Asterisk"],
    ["2B", "00101011", "+", "Plus"],
    ["2C", "00101100", ",", "Comma"],
    ["2D", "00101101", "-", "Hyphen"],
    ["2E", "00101110", ".", "Period, dot or full stop"],
    ["2F", "00101111", "/", "Slash or divide"],
    ["30", "00110000", "0", "Zero"],
    ["31", "00110001", "1", "One"],
    ["32", "00110010", "2", "Two"],
    ["33", "00110011", "3", "Three"],
    ["34", "00110100", "4", "Four"],
    ["35", "00110101", "5", "Five"],
    ["36", "00110110", "6", "Six"],
    ["37", "00110111", "7", "Seven"],
    ["38", "00111000", "8", "Eight"],
    ["39", "00111001", "9", "Nine"],
    ["3A", "00111010", ":", "Colon"],
    ["3B", "00111011", ";", "Semicolon"],
    ["3C", "00111100", "<", "Less than (or open angled bracket)"],
    ["3D", "00111101", "=", "Equals"],
    ["3E", "00111110", ">", "Greater than (or close angled bracket)"],
    ["3F", "00111111", "?", "Question mark"],
    ["40", "01000000", "@", "At symbol"],
    ["41", "01000001", "A", "Uppercase A"],
    ["42", "01000010", "B", "Uppercase B"],
    ["43", "01000011", "C", "Uppercase C"],
    ["44", "01000100", "D", "Uppercase D"],
    ["45", "01000101", "E", "Uppercase E"],
    ["46", "01000110", "F", "Uppercase F"],
    ["47", "01000111", "G", "Uppercase G"],
    ["48", "01001000", "H", "Uppercase H"],
    ["49", "01001001", "I", "Uppercase I"],
    ["4A", "01001010", "J", "Uppercase J"],
    ["4B", "01001011", "K", "Uppercase K"],
    ["4C", "01001100", "L", "Uppercase L"],
    ["4D", "01001101", "M", "Uppercase M"],
    ["4E", "01001110", "N", "Uppercase N"],
    ["4F", "01001111", "O", "Uppercase O"],
    ["50", "01010000", "P", "Uppercase P"],
    ["51", "01010001", "Q", "Uppercase Q"],
    ["52", "01010010", "R", "Uppercase R"],
    ["53", "01010011", "S", "Uppercase S"],
    ["54", "01010100", "T", "Uppercase T"],
    ["55", "01010101", "U", "Uppercase U"],
    ["56", "01010110", "V", "Uppercase V"],
    ["57", "01010111", "W", "Uppercase W"],
    ["58", "01011000", "X", "Uppercase X"],
    ["59", "01011001", "Y", "Uppercase Y"],
    ["5A", "01011010", "Z", "Uppercase Z"],
    ["5B", "01011011", "[", "Opening bracket"],
    ["5C", "01011100", "\\", "Backslash"],
    ["5D", "01011101", "]", "Closing bracket"],
    ["5E", "01011110", "^", "Caret - circumflex"],
    ["5F", "01011111", "_", "Underscore"],
    ["60", "01100000", "`", "Grave accent"],
    ["61", "01100001", "a", "Lowercase a"],
    ["62", "01100010", "b", "Lowercase b"],
    ["63", "01100011", "c", "Lowercase c"],
    ["64", "01100100", "d", "Lowercase d"],
    ["65", "01100101", "e", "Lowercase e"],
    ["66", "01100110", "f", "Lowercase f"],
    ["67", "01100111", "g", "Lowercase g"],
    ["68", "01101000", "h", "Lowercase h"],
    ["69", "01101001", "i", "Lowercase i"],
    ["6A", "01101010", "j", "Lowercase j"],
    ["6B", "01101011", "k", "Lowercase k"],
    ["6C", "01101100", "l", "Lowercase l"],
    ["6D", "01101101", "m", "Lowercase m"],
    ["6E", "01101110", "n", "Lowercase n"],
    ["6F", "01101111", "o", "Lowercase o"],
    ["70", "01110000", "p", "Lowercase p"],
    ["71", "01110001", "q", "Lowercase q"],
    ["72", "01110010", "r", "Lowercase r"],
    ["73", "01110011", "s", "Lowercase s"],
    ["74", "01110100", "t", "Lowercase t"],
    ["75", "01110101", "u", "Lowercase u"],
    ["76", "01110110", "v", "Lowercase v"],
    ["77", "01110111", "w", "Lowercase w"],
    ["78", "01111000", "x", "Lowercase x"],
    ["79", "01111001", "y", "Lowercase y"],
    ["7A", "01111010", "z", "Lowercase z"],
    ["7B", "01111011", "{", "Opening brace"],
    ["7C", "01111100", "|", "Vertical bar"],
    ["7D", "01111101", "}", "Closing brace"],
    ["7E", "01111110", "~", "Equivalency sign - tilde"],
    ["7F", "01111111", "", "Delete"],
    ["80", "10000000", "???", "Euro sign"],
    //["81", "10000001", " ", ""],
    ["82", "10000010", "???", "Single low-9 quotation mark"],
    ["83", "10000011", "??", "Latin small letter f with hook"],
    ["84", "10000100", "???", "Double low-9 quotation mark"],
    ["85", "10000101", "???", "Horizontal ellipsis"],
    ["86", "10000110", "???", "Dagger"],
    ["87", "10000111", "???", "Double dagger"],
    ["88", "10001000", "??", "Modifier letter circumflex accent"],
    ["89", "10001001", "???", "Per mille sign"],
    ["8A", "10001010", "??", "Latin capital letter S with caron"],
    ["8B", "10001011", "???", "Single left-pointing angle quotation"],
    ["8C", "10001100", "??", "Latin capital ligature OE"],
    //["8D", "10001101", " ", " "],
    ["8E", "10001110", "??", "Latin capital letter Z with caron"],
    //["8F", "10001111", " ", " "],
    //["90", "10010000", " ", " "],
    ["91", "10010001", "???", "Left single quotation mark"],
    ["92", "10010010", "???", "Right single quotation mark"],
    ["93", "10010011", "???", "Left double quotation mark"],
    ["94", "10010100", "???", "Right double quotation mark"],
    ["95", "10010101", "???", "Bullet"],
    ["96", "10010110", "???", "En dash"],
    ["97", "10010111", "???", "Em dash"],
    ["98", "10011000", "??", "Small tilde"],
    ["99", "10011001", "???", "Trade mark sign"],
    ["9A", "10011010", "??", "Latin small letter S with caron"],
    ["9B", "10011011", "???", "Single right-pointing angle quotation mark"],
    ["9C", "10011100", "??", "Latin small ligature oe"],
    //["9D", "10011101", " ", " "],
    ["9E", "10011110", "??", "Latin small letter z with caron"],
    ["9F", "10011111", "??", "Latin capital letter Y with diaeresis"],
    //["A0", "10100000", " ", "Non-breaking space"],
    ["A1", "10100001", "??", "Inverted exclamation mark"],
    ["A2", "10100010", "??", "Cent sign"],
    ["A3", "10100011", "??", "Pound sign"],
    ["A4", "10100100", "??", "Currency sign"],
    ["A5", "10100101", "??", "Yen sign"],
    ["A6", "10100110", "??", "Pipe, Broken vertical bar"],
    ["A7", "10100111", "??", "Section sign"],
    ["A8", "10101000", "??", "Spacing diaeresis - umlaut"],
    ["A9", "10101001", "??", "Copyright sign"],
    ["AA", "10101010", "??", "Feminine ordinal indicator"],
    ["AB", "10101011", "??", "Left double angle quotes"],
    ["AC", "10101100", "??", "Not sign"],
    //["AD", "10101101", "??", "Soft hyphen"],
    ["AE", "10101110", "??", "Registered trade mark sign"],
    ["AF", "10101111", "??", "Spacing macron - overline"],
    ["B0", "10110000", "??", "Degree sign"],
    ["B1", "10110001", "??", "Plus-or-minus sign"],
    ["B2", "10110010", "??", "Superscript two - squared"],
    ["B3", "10110011", "??", "Superscript three - cubed"],
    ["B4", "10110100", "??", "Acute accent - spacing acute"],
    ["B5", "10110101", "??", "Micro sign"],
    ["B6", "10110110", "??", "Pilcrow sign - paragraph sign"],
    ["B7", "10110111", "??", "Middle dot - Georgian comma"],
    ["B8", "10111000", "??", "Spacing cedilla"],
    ["B9", "10111001", "??", "Superscript one"],
    ["BA", "10111010", "??", "Masculine ordinal indicator"],
    ["BB", "10111011", "??", "Right double angle quotes"],
    ["BC", "10111100", "??", "Fraction one quarter"],
    ["BD", "10111101", "??", "Fraction one half"],
    ["BE", "10111110", "??", "Fraction three quarters"],
    ["BF", "10111111", "??", "Inverted question mark"],
    ["C0", "11000000", "??", "Latin capital letter A with grave"],
    ["C1", "11000001", "??", "Latin capital letter A with acute"],
    ["C2", "11000010", "??", "Latin capital letter A with circumflex"],
    ["C3", "11000011", "??", "Latin capital letter A with tilde"],
    ["C4", "11000100", "??", "Latin capital letter A with diaeresis"],
    ["C5", "11000101", "??", "Latin capital letter A with ring above"],
    ["C6", "11000110", "??", "Latin capital letter AE"],
    ["C7", "11000111", "??", "Latin capital letter C with cedilla"],
    ["C8", "11001000", "??", "Latin capital letter E with grave"],
    ["C9", "11001001", "??", "Latin capital letter E with acute"],
    ["CA", "11001010", "??", "Latin capital letter E with circumflex"],
    ["CB", "11001011", "??", "Latin capital letter E with diaeresis"],
    ["CC", "11001100", "??", "Latin capital letter I with grave"],
    ["CD", "11001101", "??", "Latin capital letter I with acute"],
    ["CE", "11001110", "??", "Latin capital letter I with circumflex"],
    ["CF", "11001111", "??", "Latin capital letter I with diaeresis"],
    ["D0", "11010000", "??", "Latin capital letter ETH"],
    ["D1", "11010001", "??", "Latin capital letter N with tilde"],
    ["D2", "11010010", "??", "Latin capital letter O with grave"],
    ["D3", "11010011", "??", "Latin capital letter O with acute"],
    ["D4", "11010100", "??", "Latin capital letter O with circumflex"],
    ["D5", "11010101", "??", "Latin capital letter O with tilde"],
    ["D6", "11010110", "??", "Latin capital letter O with diaeresis"],
    ["D7", "11010111", "??", "Multiplication sign"],
    ["D8", "11011000", "??", "Latin capital letter O with slash"],
    ["D9", "11011001", "??", "Latin capital letter U with grave"],
    ["DA", "11011010", "??", "Latin capital letter U with acute"],
    ["DB", "11011011", "??", "Latin capital letter U with circumflex"],
    ["DC", "11011100", "??", "Latin capital letter U with diaeresis"],
    ["DD", "11011101", "??", "Latin capital letter Y with acute"],
    ["DE", "11011110", "??", "Latin capital letter THORN"],
    ["DF", "11011111", "??", "Latin small letter sharp s - ess-zed"],
    ["E0", "11100000", "??", "Latin small letter a with grave"],
    ["E1", "11100001", "??", "Latin small letter a with acute"],
    ["E2", "11100010", "??", "Latin small letter a with circumflex"],
    ["E3", "11100011", "??", "Latin small letter a with tilde"],
    ["E4", "11100100", "??", "Latin small letter a with diaeresis"],
    ["E5", "11100101", "??", "Latin small letter a with ring above"],
    ["E6", "11100110", "??", "Latin small letter ae"],
    ["E7", "11100111", "??", "Latin small letter c with cedilla"],
    ["E8", "11101000", "??", "Latin small letter e with grave"],
    ["E9", "11101001", "??", "Latin small letter e with acute"],
    ["EA", "11101010", "??", "Latin small letter e with circumflex"],
    ["EB", "11101011", "??", "Latin small letter e with diaeresis"],
    ["EC", "11101100", "??", "Latin small letter i with grave"],
    ["ED", "11101101", "??", "Latin small letter i with acute"],
    ["EE", "11101110", "??", "Latin small letter i with circumflex"],
    ["EF", "11101111", "??", "Latin small letter i with diaeresis"],
    ["F0", "11110000", "??", "Latin small letter eth"],
    ["F1", "11110001", "??", "Latin small letter n with tilde"],
    ["F2", "11110010", "??", "Latin small letter o with grave"],
    ["F3", "11110011", "??", "Latin small letter o with acute"],
    ["F4", "11110100", "??", "Latin small letter o with circumflex"],
    ["F5", "11110101", "??", "Latin small letter o with tilde"],
    ["F6", "11110110", "??", "Latin small letter o with diaeresis"],
    ["F7", "11110111", "??", "Division sign"],
    ["F8", "11111000", "??", "Latin small letter o with slash"],
    ["F9", "11111001", "??", "Latin small letter u with grave"],
    ["FA", "11111010", "??", "Latin small letter u with acute"],
    ["FB", "11111011", "??", "Latin small letter u with circumflex"],
    ["FC", "11111100", "??", "Latin small letter u with diaeresis"],
    ["FD", "11111101", "??", "Latin small letter y with acute"],
    ["FE", "11111110", "??", "Latin small letter thorn"],
    ["FF", "11111111", "??", "Latin small letter y with diaeresis"],
  ],
};

export default asciiModule;
