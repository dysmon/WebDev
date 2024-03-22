def centered_average(nums):
    nums.sort()

    sum_except_extremes = sum(nums[1:-1])

    centered_avg = sum_except_extremes // (len(nums) - 2)

    return centered_avg
