import collections

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

def missingElement3(array1, array2):
    dict = collections.defaultdict(int)

    for num in array2:
        dict[num] += 1
      
    
    for num in array1:
        if dict[num] == 0:
            return num
        else:
            dict[num] -= 1
        
    
    

print(missingElement3([1,2,3,4,5,6,7], [3,7,2,1,4,6]))
print(missingElement3([5,5,7,7], [5,7,7]))
print(missingElement3([9,8,7,6,5,4,3,2,1], [9,8,7,5,4,3,2,1]))