a = input()[::-1]
decimal = 0
power = 1

for i in a:
    if i == '1':
        decimal += int(i) * power
    power *= 2

print(decimal)
