x_lst = []
y_lst = []

ansx, ansy = 0, 0
for _ in range(3):
    x, y = map(int, input().split())
    x_lst.append(x)
    y_lst.append(y)

for i in range(3):
    if x_lst.count(x_lst[i]) == 1:
        ansx = x_lst[i]
    if y_lst.count(y_lst[i]) == 1:
        ansy = y_lst[i]

print(ansx, ansy)