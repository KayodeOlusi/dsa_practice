# Solution 1
def isAnagram(s, t):
    if len(s) != len(t):
        return False
        
    s_dict = {}
    t_dict = {}
    
        
    for i in range(len(s)):
        if s_dict.get(s[i]):
            s_dict[s[i]] += 1
        else:
            s_dict[s[i]] = 1
                
        if t_dict.get(t[i]):
            t_dict[t[i]] += 1
        else:
            t_dict[t[i]] = 1
        
        
    for i in s_dict:
        if s_dict[i] != t_dict.get(i):
            return False
        
    return True

# Solution 2
def isAnagram2(s, t):
    s.replace(" ", "").lower()
    t.replace(" ", "").lower()

    return sorted(s) == sorted(t)

# Solution 3
def isAnagram3(s, t):
    s.replace(" ", "").lower()
    t.replace(" ", "").lower()

    if len(s) != len(t):
        return False
    
    count = {}

    for letter in s:
        if letter in count:
            count[letter] += 1
        else:
            count[letter] = 1
    
    for letter in t:
        if letter in count:
            count[letter] -= 1
        else:
            count[letter] = 1
    
    for k in count:
        if count[k] != 0:
            return False

    return True  

# Test
print(isAnagram3("anagram", "nagaram")) 
print(isAnagram3("rat", "car"))
    
