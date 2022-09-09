def pairSum(array, k):
    if len(array) < 2:
        return
    
    seen = set()
    output = set()

    for num in array:
        difference = k - num

        if not(difference in seen):
            seen.add((num))
        else:
            output.add((num, difference))
    
    return output



print(pairSum([1,9,2,8,3,7,4,6,5,5,13,14,11,13,-1], 10))
print(pairSum([1,2,3,1], 3))
print(pairSum([1,3,2,2], 4))