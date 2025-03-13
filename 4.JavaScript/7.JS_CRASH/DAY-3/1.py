input_strings = ["ab", "bax", "bba", "xy", "py", "ypa", "a", "abb"]
palindromes = set()

# Generate all possible combinations of input strings with repetition, up to length 9
from itertools import product

def is_palindrome(s):
    return s == s[::-1]

max_length = 9

# Check single strings
for s in input_strings:
    if len(s) <= max_length and is_palindrome(s):
        palindromes.add(s)

# Check combinations of 2 to 4 strings (since 4 strings of max length 3 can reach 12, but we cap at 9)
for num_terms in range(2, 5):
    for combo in product(input_strings, repeat=num_terms):
        candidate = ''.join(combo)
        if len(candidate) > max_length:
            continue
        if is_palindrome(candidate):
            palindromes.add(candidate)

# Convert to a sorted list by length and then lexicographically
sorted_palindromes = sorted(palindromes, key=lambda x: (len(x), x))

# Print the result in the specified format
print(", ".join(sorted_palindromes))
print(len(palindromes))