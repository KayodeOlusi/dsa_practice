def sentenceReversal(str):
    return " ".join(reversed(str.split()))

def sentenceReversal2(str):
    return " ".join(str.split()[::-1])

def sentenceReversal3(str):
    trimmed_string = str.split()
    result = ""
    i = len(trimmed_string) - 1

    while i >= 0:
        result += trimmed_string[i] + " "
        i -= 1
    
    return result

def sentenceReversal4(str):
    words = []
    spaces = [" "]
    length = len(str)
    result = ""

    i = 0

    while i < length:
        if str[i] not in spaces:
            word_start = i

            while i < length and str[i] not in spaces:
                i += 1

            words.append(str[word_start:i])
        
        i += 1
    
    j = len(words) - 1
    
    while j >= 0:
        result += words[j] + " "
        j -= 1
    
    return result


print(sentenceReversal4("This is the best"))
print(sentenceReversal4("      space between"))
print(sentenceReversal4("space after       "))
print(sentenceReversal4("Hello John    how are you     "))