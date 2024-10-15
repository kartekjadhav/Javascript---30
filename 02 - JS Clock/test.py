from multipledispatch import dispatch

@dispatch(int, int)
def product(a, b):
    print(a * b)

@dispatch(int, int, int)
def product(a, b, c):
    print(a * b * c)

@dispatch(float, float)
def product(a, b):
    print(a * b)

product(2.5, 2.5)