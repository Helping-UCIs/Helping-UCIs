#!/usr/bin/python3

from tkinter import * # note that module name has changed from Tkinter in Python 2 to tkinter in Python 3
from tkinter import messagebox
top = Tk()
# Code to add widgets will go here...

top.geometry("100x100")
def helloCallBack():
   msg = messagebox.showinfo( "Hello Python", "Hello World")

B = Button(top, text = "Hello", command = helloCallBack)
B.place(x = 50,y = 50)
top.mainloop()