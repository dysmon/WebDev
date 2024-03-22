def end_other(a, b):
    a = a.lower()
    b = b.lower()
    if a.find(b) != -1:
        return a[len(a) - len(b):] == b
    elif b.find(a) != -1:
        return b[len(b) - len(a):] == a
    return False
