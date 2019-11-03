#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Oct 21 19:16:48 2019

@author: kurtlekanger
"""

#def stringy(size):
#    result, count = '', 0
#    for i in range(size):
#        count = (count + 1) % 2
#        result += str(count)      
#    return result


def stringy(size):
    return ''.join(str(i % 2) for i in range (1, size +1))