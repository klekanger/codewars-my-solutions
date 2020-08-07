#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Nov  2 18:33:58 2019

@author: kurtlekanger

https://www.codewars.com/kata/calculate-average/train/python

Write function avg which calculates average of numbers in given list.

Python:

Due to rounding issues please do not use statistics.mean or such.
If the array is empty, return 0.
"""

def find_average(array):
        return sum(array)/len(array) if array else 0