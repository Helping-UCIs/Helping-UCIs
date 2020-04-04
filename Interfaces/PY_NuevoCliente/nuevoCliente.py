#!/usr/bin/python3

from tkinter import *
from tkinter import messagebox
top = Tk()


top.geometry("100x100")
def helloCallBack():
   msg = messagebox.showinfo( "Hello Python", "Hello World")

B = Button(top, text = "Hello", command = helloCallBack)
B.place(x = 50,y = 100)


L1 = Label(top, text = "Hola caracola")
L1.place(x = 50, y = 50)
E1 = Entry(top, bd = 5)
E1.place(x = 50, y = 150)

top.mainloop()