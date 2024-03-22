if __name__ == '__main__':
    n = int(input())
    arr = map(int,
              input().split())

    scores = list(arr)
    max_score = max(scores)

    scores = [score for score in scores if score != max_score]

    runner_up_score = max(scores)

    print(runner_up_score)
