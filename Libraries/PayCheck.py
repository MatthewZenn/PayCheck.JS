import re

CardName = {
    'MASTER CARD': [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
    'VISA': [40, 41, 42, 43, 44, 45, 46, 47,48, 49],
    'AMERICAN EXPRESS': [34, 37],
    'DISCOVER': [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
    'DINERS CLUB': [30, 36, 38]
}

print('▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄')
print('█ ▄▄ █ ▄▄▀█ ██ ██ ▄▄▀█ ████ ▄▄█▀▄▀█ █▀█')
print('█ ▀▀ █ ▀▀ █ ▀▀ ██ ████ ▄▄ █ ▄▄█ █▀█ ▄▀█')
print('█ ████▄██▄█▀▀▀▄██ ▀▀▄█▄██▄█▄▄▄██▄██▄█▄█')
print('▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀')
print(' ')
x = input("Card Number: ")

def Card():
    x2 = x[:2]

    for k,v in CardName.items():
        for y in v:
            if y == int(x2):
                print('Validation: PASSED\nIdentified:',k)
                break

def Luhn():
    new_list = []
    b = list(x)[1::2]
    c = [int(n) for n in list(x)[::2]]
    for i in c:
        b.append(str(i*2))
    for z in b:
        for j in z:
            new_list.append(int(j))
    summ = sum(new_list)
    digit=summ%10

    if digit == 0:
        Card()
    else:
        print("FAILED: CheckSum Error", summ)

if re.fullmatch('[0-9]{13,16}', x):
    Luhn()

else:
    print("FAILED: Incorrect Format")