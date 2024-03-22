expected = int(input())
actual = int(input())

if (expected == 1 and actual != 1) or (expected != 1 and actual == 1):
    print("NO")
else:
    print("YES")