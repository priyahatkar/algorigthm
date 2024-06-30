const cl = console.log;

// ('elbow','below')

function areAnagrams(str1, str2) { 
    return str1.split('').sort().join('') === str2.split('').sort().join(''); 
} 
cl(areAnagrams('elbow','below'))
cl(areAnagrams('elbow','belows'))

function isAnagram(str1, str2) { 
    const sortedStr1 = str1.split('').sort().join(''); 
    const sortedStr2 = str2.split('').sort().join(''); 
    return sortedStr1 === sortedStr2; 
} 
cl(isAnagram('elbow','below'))

