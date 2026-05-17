num = int(input("enter a number:-"))
if num >= 50:
    print("the number is above 50 and it is", end=" ")
    if num%2==0:
        print("even number")
    else :
        print("odd number")
else :
    print("the number is below 50")