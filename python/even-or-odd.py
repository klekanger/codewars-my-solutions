#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Nov  2 18:20:28 2019

@author: kurtlekanger

https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/python

Create a function (or write a script in Shell) that takes an integer as an 
argument and returns "Even" for even numbers or "Odd" for odd numbers.

"""

def even_or_odd(number):
    return number % 2 and "Odd" or "Even"