import unittest
import requests


class MyTestCase(unittest.TestCase):
    def test_indexurl(self):
        self.assertEqual(requests.get('http://localhost:5000').status_code, 200)

    def test_other(self):
        self.assertEqual(requests.get("http://localhost:5000/other").status_code, 400)


if __name__ == '__main__':
    unittest.main()
