from math import sqrt

begin = int(input())
to = int(input())

for i in range(begin, to + 1):
    if sqrt(i) == round(sqrt(i)):
        print(i)
