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

print(isAnagram("anagram", "nagaram")) 
print(isAnagram("rat", "car"))
    
