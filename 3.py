# class Solution:
#     def maxArea( height):
#         max_area = 0
#         left = 0
#         right = len(height) - 1
#         while left < right: 
#             h = min(height[left], height[right])
#             a = right - left
#             area = h * a
#             max_area = max(max_area, area)
#             if height[left] < height[right]:
#                 left += 1
#             else:
#                 right -= 1
#         return max_area
# height = [1,8,6,2,5,4,8,3,7]
# max_area = Solution.maxArea(height)
# print(max_area) 
      

# class Solution:
#     def plusOne( digits):
#         for i in range(len(digits)-1, -1, -1):
#             if digits[i] < 9:
#                 digits[i] += 1
#                 return digits
#             else:
#                 digits[i] = 0
#         return [1] + digits
# digits = [9]
# result = Solution.plusOne(digits)
# print(result)  
# class Solution:
#     def maxProfit( prices):
#         if len(prices) <= 1:
#             return 0
#         min_price = prices[0]
#         max_profit = 0 
#         for price in prices:
#             if price < min_price:
#                 min_price = price
#             elif price - min_price > max_profit:
#                 max_profit = price - min_price
#         return max_profit
# prices = [7,1,5,3,6,4]
# result = Solution().maxProfit(prices)
# print(result)