# 0층 : 0 (불가능)
# 1층 : 0 (불가능)
# 2층 : 1
# 3층 : -2층 한 지점의 수가 0이 아니면 -2층의 방법수 + 1
# 3층 : -3층 한 지점의 수가 0이 아니면 -3층의 방법수 + 1

#... n층 : n-2이 0이 아니면 n-2층 + 1 + n-3층이 0이 아니면 n-2층 + 1

n = int(input())
pd_arr = [0] + [0] + [1] + [1] + [0] * (n - 3)
for i in range(4, n+1):
    if pd_arr[i-2] != 0:
        pd_arr[i] += pd_arr[i-2]
    if pd_arr[i-3] != 0:
        pd_arr[i] += pd_arr[i-3]
print(pd_arr[n] % 10007)