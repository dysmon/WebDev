n = int(input())
s = input()

nums = [int(i) for i in s.split()]
filtered = [nums[i] for i in range(len(nums) - 1) if nums[i] < nums[i + 1]]

print(len(filtered))
