def continuosSum(arr):
    if len(arr) == 0:
        return 0
    
    maxSum = currentSum = arr[0]
    
    for num in arr[1:]:
        currentSum = max(currentSum + num, num)
        maxSum = max(currentSum, maxSum)

    return maxSum

def continuosSum2(arr):
    maxSum = 0
    currentSum = 0

    for num in arr:
        currentSum += num

        if currentSum > maxSum:
            maxSum = currentSum
        
        if currentSum < 0:
            currentSum = 0
        
    return maxSum


print(continuosSum2([1,2,-1,3,4,-1]))
print(continuosSum2([1,2,-1,3,4,10,10,-10,-1]))
print(continuosSum2([-1,1]))