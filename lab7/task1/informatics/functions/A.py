s = input().split()


def min(a, b, c, d):
    if a > b:
        a = b
    if c > d:
        c = d
    if a > c:
        a = c
    return a


print(min(*s))
