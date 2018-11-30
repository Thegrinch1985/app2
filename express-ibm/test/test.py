import os

from git import Repo

repo = Repo.clone_from(
    "https://github.com/Thegrinch1985/python.git",
    'C:/Users/T450 i5/Documents/Python/py',
    branch='master'
)

pathway = "C:/Users/T450 i5/Documents/Python/py"


# print(repo)
Java = 0
JavaList = []
CplusPlus = 0


CplusPlusList = []
CSharpe = 0
CSharpeList = []

for root, dirs, files in os.walk(pathway):
    for file in files:
        if file.endswith('.gradle'):
            temp = (os.path.join(root, file))
            Java += 1
            JavaList.append(temp)

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


def menu(var):
    choice = {
        1: "Java",
        2: "C++",
        3: "C#"
    }
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



