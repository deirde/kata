import unittest

from index import get_the_lowest


class TestGetTheLowestNumber(unittest.TestCase):

    def setUp(self):
        pass

    def test_numbers_3_4(self):
        self.assertEqual(get_the_lowest([3, 1, 2]), 1)


if __name__ == '__main__':
    unittest.main()
