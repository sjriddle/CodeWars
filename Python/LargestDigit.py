def solution(digits):
    return int(max(digits[a:a + 5] for a in xrange(len(digits) - 4)))
