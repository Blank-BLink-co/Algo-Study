N = int(input())

# 배열을 뒤집는 아이디어가 아닌, 행과 열을 바꿔서 배열을 입력 받는 방향
arr = [[0]*1001 for _ in range(1001)]

# 각 변수를 받고 색종이 너비 안에다 += cnt 후에 cnt+=1 해주면 될 듯
for n in range(1, N+1):
    # n번 돌면서 입력 받고, 각 색종이 범위 내에다가 1부터(1번 색종이부터) 넣어줌
    sj, si, w, h = map(int, input().split())

    for i in range(si, si+h):
        for j in range(sj, sj+w):
            #arr[i][j] = n
            arr[i][sj:sj+w] = [n]*w

# 여기서 빈도수 배열을 만들어서 세는 게 현 코드보다 시간이 더 짧게 걸림
# cnts=[]

#1
# cnts = [0]*(N+1)
# for i in range(1001):
#     for j in range(1001):
#         cnts[arr[i][j]] += 1

#2
for n in range(1, N+1):
    cnt = 0
    for lst in arr:
        cnt += lst.count(n)
    print(cnt)