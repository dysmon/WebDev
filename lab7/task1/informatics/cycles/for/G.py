a = int(input())

for i in range(2, a // 2 + 1):
    if a % i == 0:
        print(i)
        break
else:
    print(a)
