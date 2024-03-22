RING_LENGTH = 109

velocity = int(input())
time = int(input())

print(velocity * time % RING_LENGTH)