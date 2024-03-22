n = int(input())
s = input()

even_index = s.split()[::2]
print(*even_index)
