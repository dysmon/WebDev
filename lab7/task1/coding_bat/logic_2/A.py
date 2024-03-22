def make_bricks(small, big, goal):
    if goal - big * 5 < 0:
        big_partitions = goal // 5
        goal -= big_partitions * 5
    else:
        goal -= big * 5
    return goal - small <= 0
