let str = "madam";
function reverse(str){
    let rev_str = "";
    for( let i = str.length-1 ;i >= 0 ;i--)
    {
      rev_str+= str[i];
    }
    return rev_str;
}
console.log(reverse(str));

function is_palindrome( str )
  {
    reverse_str = reverse(str);
    if( reverse_str === str)
    {
      console.log("passed string is palindrome ");
    }
    else {
        console.log("passed string is not palindrome");
    }
    }
is_palindrome(str);
