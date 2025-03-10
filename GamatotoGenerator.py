import os
import random
from flask import Flask, request, jsonify

os.chdir(os.path.dirname(os.path.abspath(__file__)))
curr_path = os.getcwd()

a: list
b: list

with open(r"GamatotoExpedition_Log_2_tw.csv", mode="r", encoding="UTF-8") as f:
    a = [i.split("|")[0].strip() for i in f.readlines()]
    a.pop()


with open(r"GamatotoExpedition_Log_3_tw.csv", mode="r", encoding="UTF-8") as f:
    b = [i.split("|")[0].strip() for i in f.readlines()]
    b.pop()


def main():
    name = input()
    print(name + a[random.randint(0, len(a) - 1)] + b[random.randint(0, len(b) - 1)])


"""
if __name__ == "__main__":
    main()
"""
