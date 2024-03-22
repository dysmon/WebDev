def has22(nums):
    s = "".join(str(num) for num in nums)
    return s.find('22') != -1
