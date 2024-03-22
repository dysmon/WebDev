def count_evens(nums):
    arr = [num for num in nums if num % 2 == 0]
    return len(arr)
