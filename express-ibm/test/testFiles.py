import os

Java = 0
JavaList = []
CplusPlus = 0
CplusPlusList = []
CSharpe = 0
CSharpeList = []

Python = 0
PyList = []

for root, dirs, files in os.walk(
        '/home/howie/app/express-ibm'):
    for file in files:
        if file.endswith('.py'):
            temp = (os.path.join(root, file))
            Python += 1
            PyList.append(temp)

        elif file.endswith('.cpp'):
            temp = (os.path.join(root, file))
            CplusPlus += 1
            CplusPlusList.append(temp)

        elif file.endswith('.csproj'):
            temp = (os.path.join(root, file))
            CSharpe += 1
            CSharpeList.append(temp)

print("Java Files in this Repository", Java)
print("C++ Files in this Repository", CplusPlus)
print("C# Files in this Repository", CSharpe)
print("Py Files in this Repository", Python)


def menu(var):
    choice = {
        1: "Java",
        2: "C++",
        3: "C#",
	4: "Py"    }
    return choice.get(var, "Invalid Entry")


var = int(input("Please Choose a Project Language you wish to choose in this Directory "))
# print(menu(var))
answer = (menu(var))
if answer == "Java":
    for j in JavaList:
        print(j)
elif answer == "C++":
    for cp in CplusPlusList:
        print(cp)
elif answer == "C#":
    for cs in CSharpeList:
        print(cs)
elif answer == "Py":
    for py in PyList:
        print(py)


