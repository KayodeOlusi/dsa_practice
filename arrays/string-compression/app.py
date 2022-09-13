def stringCompression(string):
    # Solution for sorted strings only
    # Time complexity: O(n)
    # Space complexity: O(n)

    result = ""
    length = len(string)

    if length == 0:
        return ""
    
    if length == 1:
        return string + "1"

    last = string[0]
    count = 1
    index = 1

    while index < length:
        if string[index] == string[index - 1]:
            count += 1
        else:
            result += string[index - 1] + str(count)
            count = 1

        index += 1
    
    result += string[index - 1] + str(count)

    return result


print(stringCompression(""));
print(stringCompression("AAAaaa"));
print(stringCompression("AABBCC"));
print(stringCompression("AAABCCDDDDD"));
print(stringCompression("AAAABBBBCCCCCDDEEEE"));