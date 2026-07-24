numberlargest = int(input("Enter the first number: "))
numbersmallest = int(input("Enter the second number: "))

while numbersmallest:
    
    numberstore = numbersmallest
    numbersmallest = numberlargest % numbersmallest
    numberlargest = numberstore

print(f"The HCF of the two numbers is: {numberlargest}")