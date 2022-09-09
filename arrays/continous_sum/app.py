def continuosSum(arr):
    if len(arr) == 0:
        return 0
    
    maxSum = currentSum = arr[0]
    
    for num in arr[1:]:
        currentSum = max(currentSum + num, num)
        maxSum = max(currentSum, maxSum)

    return maxSum


print(continuosSum([1,2,-1,3,4,-1]))
print(continuosSum([1,2,-1,3,4,10,10,-10,-1]))
print(continuosSum([-1,1]))