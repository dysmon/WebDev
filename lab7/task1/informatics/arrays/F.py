n = int(input())
s = input()

nums = [int(i) for i in s.split()]
filtered = [nums[i] for i in range(1, len(nums) - 1) if nums[i] > nums[i + 1] and nums[i] > nums[i - 1]]

print(len(filtered))
