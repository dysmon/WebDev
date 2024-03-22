if __name__ == '__main__':
    n = int(input())
    integer_list = map(int, input().split())
    elements = tuple(integer_list)
    result = hash(elements)

    print(result)
