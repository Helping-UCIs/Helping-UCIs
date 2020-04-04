from tkinter import *
import webbrowser
import os
import data

articleList = [
{'name': "Edición inline HTML5 con PHP, MySQL y AJAX",
'url': "http://programacion.net/articulo/edicion_inline_html5_con_php-_mysql_y_ajax_1560"
},
{'name': "Los 6 mejores generadores de código CSS",
"url": "http://programacion.net/articulo/los_6_mejores_generadores_de_codigo_css_1559"
}
]

def __init__(self, master=None):
    Frame.__init__(self,master)
    self.pack()
    self.articleList = data.articleList
    self.readingInformation = None
    self.createWidgets()


def createWidgets(self):
    articleNamesOnly = []
    for x in self.articleList:
        articleNamesOnly.append(x['name'])
        self.optionSelected = StringVar(self.master)
        self.optionSelected.set(articleNamesOnly[0])  # initial value
        option = OptionMenu(self.master, self.optionSelected, *articleNamesOnly)
        option['bg'] = "green"
        option.pack()
        readBtn = Button(self)
        readBtn["text"] = "Read"
        readBtn["fg"] = "white"
        readBtn['bg'] = "crimson"
        readBtn["command"] = self.readArticle
        readBtn.pack()
        self.readingInformation = StringVar()
        readingLabel = Label(self.master, textvariable=self.readingInformation)
        readingLabel['font'] = ("Arial", "16")
        readingLabel['fg'] = "#666"
        readingLabel.pack()

def readArticle(self):
    url = ""
    for x in self.articleList:
        if x['name'] == self.optionSelected.get():
            url = x['url']
            break
    self.readingInformation.set("Reading " + self.optionSelected.get() + "!")
    webbrowser.open(url)

root = Tk()
root.wm_title("Web Development Articles Reader | programacion.net")
if "nt" == os.name:
    root.wm_iconbitmap(bitmap = "favicon.ico")
else:
    root.wm_iconbitmap(bitmap = "@favicon.xbm")
app = Reader(master=root)
app.mainloop()