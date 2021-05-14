var max=prompt("Enter a number upto which prime number to be found");
function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}
document.write("The prime numbers upto" +max+ "is: "+primeFactorsTo(max));