#power map
items  = ["a", "b", "c"]
n=len(items)
total = 2**n
print("===power map===")
print("items:", items)
print("elements:",n,"total subsets: 2^",n,":",total)
print()

# binary mask table
print("mask table (n=",n," )")
mask =0 
while mask < total:
    bit1 = mask>>2 & 1
    bit2 = mask>>1 & 1
    bit0 = mask&1
    print("mask:",mask,"bits:",bit1,bit2,bit0)
    mask +=1
print()
#subset probe
print("subset probe (n=",n," )")
mask =0
while mask < total:
    subset = []
    j = 0
    while j<n:
        probe = 1<<j
        if mask & probe > 0:
            subset.append(items[j])
        j +=1
    print("mask:",mask,"subset:",subset)
    mask +=1
print()
# bit difference
def bit_diff(a,b):
    flips =0
    while a>0 or b>0:
        last_a = a&1
        last_b = b&1
        if last_a != last_b:
            flips +=1
        a >>= 1
        b >>= 1
    return flips
print("bit difference ")
print("a=5, b=3:", bit_diff(5, 3))
print("a=7, b=1:", bit_diff(7, 1))