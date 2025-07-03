class Solution:
    def maxArea( height):
        max_area = 0
        left = 0
        right = len(height) - 1
        while left < right: 
            h = min(height[left], height[right])
            a = right - left
            area = h * a
            max_area = max(max_area, area)
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        return max_area
height = [1,8,6,2,5,4,8,3,7]
max_area = Solution.maxArea(height)
print(max_area) 
      

