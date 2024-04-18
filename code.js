function binarySearch(list, element)
{
    //Exception handling
    if (!Number.isInteger(element))
        return -1
    if (list.length === 0)
        return -1
    if (list.length === 1)
        if (element != list[0])
            return -1
        else
            return 0
    if(list[0] === element)
        return 0

    //Binary Search
    let start = 0, end = list.length - 1
    while (start <= end) 
    {
        let mid =  Math.floor((start + end)/ 2)
        if (start === end && element != list[start])
            return -1
        if (list[mid] < element) 
            start = mid + 1
        else if (list[mid] > element) 
            end = mid - 1
        else if (list[mid] === element) 
            return mid;
    }
    return -1
}
