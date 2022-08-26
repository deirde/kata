// Write a C++ program to find the largest and lowest element of a given array of integers.
// Reference: https://www.w3resource.com/cpp-exercises/array/cpp-array-exercise-1.php
// https://www.geeksforgeeks.org/return-local-array-c-function/

#include <iostream>
#include <algorithm>
#include <assert.h>

int findLargestElementInArray(int nums[], int n) {
    return *std::max_element(nums, nums + n);
}

int findLowestElementInArray(int nums[], int n) {
    return *std::min_element(nums, nums + n);
}

int main() {
    int nums[] = {-5, 11, 3, 25, 21, 54};
    int n = sizeof(nums) / sizeof(nums[0]);
    assert(54 == findLargestElementInArray(nums, n));

    nums[3] = 84;
    assert(84 == findLargestElementInArray(nums, n));

    assert(-5 == findLowestElementInArray(nums, n));

    return EXIT_SUCCESS;
}