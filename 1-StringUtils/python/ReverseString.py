def ReverseString(str):
    return str[::-1];

def noFancyReverse(str):
    reverseStr = ''
    index = len(str) - 1
    while index >=0:
        reverseStr += str[index]
        index -= 1
    return reverseStr

def main():
    print ReverseString("Hello World")

if __name__ == '__main__':
    main()