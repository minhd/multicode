import unittest
import ReverseString as RV

def fun(x):
    return x + 1

class UnitTest(unittest.TestCase):
    def test(self):
        self.assertEqual(RV.ReverseString("abc"),"cba")
    def test2(self):
        self.assertEqual(RV.ReverseString("Hello World"), "dlroW olleH")

def main():
    unittest.main()

if __name__ == '__main__':
    main()