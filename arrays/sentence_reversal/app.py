def sentenceReversal(str):
    return ' '.join(reversed(str.split()))

def sentenceReversal2(str):
    trimmed_string = str.split()
    result = ""

    for word in trimmed_string:
        result += word + " " 

    return result

print(sentenceReversal2("This is the best"))
print(sentenceReversal2("      space between"))
print(sentenceReversal2("space after       "))
print(sentenceReversal2("Hello John    how are you     "))