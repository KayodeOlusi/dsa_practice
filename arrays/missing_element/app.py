def missingElement(array1, array2):
    array1.sort()
    array2.sort()

    for i in range(len(array1)):
        if array1[i] != array2[i]:
            return array1[i]


def missingElement2(array1, array2):
    array1.sort()
    array2.sort()

    for i, j in zip(array1, array2):
        if i != j:
            return i
    

print(missingElement2([1,2,3,4,5,6,7], [3,7,2,1,4,6]))
print(missingElement2([5,5,7,7], [5,7,7]))
print(missingElement2([9,8,7,6,5,4,3,2,1], [9,8,7,5,4,3,2,1]))