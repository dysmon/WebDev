s = [int(i) for i in input().split()]


def power(a, n):
    b = 1
    for i in range(n):
        b *= a
    return b


print(power(*s))
