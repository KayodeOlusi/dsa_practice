def uniqueCharacters(string):
    return len(set(string)) == len(string)

def uniqueCharacters2(string):
    hash = {}

    for c in string:
        if c in hash:
            return False
        else:
            hash[c] = c
    
    return True


print(uniqueCharacters2(""))
print(uniqueCharacters2("goo"))
print(uniqueCharacters2("abcde"))
print(uniqueCharacters2("abcdefg"))
