function isPalindrome(s) {
    var rev = s.split('').reverse().join('');
    return s == rev;
  }
function longestPalind(s) {
    var max_length = 0, max= '';
    for (var i = 0; i < s.length; i++) {
      var subs = s.substr(i, s.length);
      if (subs.length <= max_length) break; 
      for (var j = subs.length; j >= 0; j--) {
        var sub_subs = subs.substr(0, j);
        if (sub_subs.length <= max_length) break;
        if (isPalindrome(sub_subs)) {
            max_length = sub_subs.length;
            max= sub_subs;
        }
      }
    }
    return max;
  }