VOWELS = 'aeiou'


def getCount(string):
    """ get_count == PEP8 (forced mixedCase by CodeWars) """
    return sum(a in VOWELS for a in string.lower())
