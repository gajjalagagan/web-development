def numberbits(n):
    ones = 0
    zeroes =0
    while n:
        if n & 1:
            ones += 1
        else:
            zeroes += 1
        n >>= 1

    print("Number of 1's in binary representation:", ones,"Number of 0's in binary representation:", zeroes)
numberbits(10)
