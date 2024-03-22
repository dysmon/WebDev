n = int(input())

i = 2
while i < n / 2 + 1:
    if n % i == 0:
        print(i)
        break
    i += 1
else:
    print(n)
