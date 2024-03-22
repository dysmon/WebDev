n = int(input())
s = input()

positive_nums = [num for num in s.split() if int(num) > 0]
print(len(positive_nums))
