begin = int(input())
to = int(input())
remainder = int(input())
division = int(input())

for i in range(begin, to + 1):
    if i % division == remainder:
        print(i)