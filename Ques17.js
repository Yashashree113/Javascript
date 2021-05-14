var arr_num=[1,13,12,8];
function sum(ArrayNumber)
    {
        var total = 0;

        for (i=0; i < ArrayNumber.length; ++i)
            {
                total += ArrayNumber[i];
            }
            return total;
    }
    console.log(sum(arr_num));