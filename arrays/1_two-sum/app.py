def twoSum(array, target):
    result = {}

    for i in range(len(array)):
        difference = target - array[i]

        if difference in result:
            return [result[difference], i]
        
        result[array[i]] = i

print(twoSum([2,7,11,15], 9))
print(twoSum([3, 2, 4], 6))