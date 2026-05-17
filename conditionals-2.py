marks = int(input("enter a number:-"))
if marks>=35:
    print("u have passed", end=" ")
    if marks>=95:
        print("Great! you got A1")
    elif marks >= 90:
        print("Well Done!you got A2")
    elif marks >= 85:
        print("NICE!you got B1")
    elif marks >= 80:
        print("GOOD!you got B2")
    elif marks >= 90:
        print("try hard!you got C1")
    elif marks >= 90:
        print("better luck next time!you got C2")
    else:
        print("Work Hard! you have got d")
else:
    print("failed")