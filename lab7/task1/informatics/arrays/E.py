n = int(input())
s = input()

nums = [int(i) for i in s.split()]
for i in range(len(nums) - 1):
    if (nums[i] > 0 and nums[i + 1] > 0) or (nums[i] < 0 and nums[i + 1] < 0):
        print("YES")
        break
else:
    print("NO")
