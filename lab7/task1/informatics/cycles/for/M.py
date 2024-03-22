n = int(input())

zeros = 0
for i in range(n):
    current = int(input())
    if current == 0:
        zeros += 1

print(zeros)
