n = int(input())
s = input()

even_numbers = (num for num in s.split() if int(num) % 2 == 0)
print(*even_numbers)