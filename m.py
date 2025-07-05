# class Solution:
#     def reverse(x):
#         rev = 0
#         while x > 0:
#             digit = x % 10
#             rev = rev * 10 + digit
#             x = x // 10
#         return rev

# x = 123
# print(Solution.reverse(x)) 
# class Solution:
#     def searchInsert( nums, target):
#         left, right = 0, len(nums) - 1
#         while left <= right:
#             mid = (left + right) // 2
#             if nums[mid] == target:
#                 return mid
#             elif nums[mid] < target:
#                 left = mid + 1
#             else:
#                 right = mid - 1
#         return left
# nums = [1, 3, 5, 6]
# target = 5
# print(Solution.searchInsert(nums, target))
class Solution:
    def findLucky(self, arr: List[int]) -> int:
        count = {}
        for num in arr:
            count[num] = count.get(num, 0) + 1
            lucky = -1
        for num, freq in count.items():
            if num == freq:
                lucky = max(lucky, num)
                
# class Solution:
#     def findLucky(self, arr: List[int]) -> int:
#         a=mode(arr)
#         for i in arr:
#             if count(i)==a:
#                 return i
#         return -1
    



            