def make_chocolate(small, big, goal):
    small_bars = 0
    if goal - big * 5 < 0:
        big_partitions = goal // 5
        goal -= big_partitions * 5
    else:
        goal -= big * 5

    if goal - small <= 0:
        small_bars += small + (goal - small)
        return small_bars
    else:
        return -1
