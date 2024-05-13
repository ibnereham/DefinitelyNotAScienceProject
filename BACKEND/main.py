import tkinter as tk
from Img2text import img2text
from solver import solve
from tkinter import filedialog


def imgproccess():
    x = filedialog.askopenfilename(initialdir="./", title="Select Image")
    try:
        text = img2text(x)
        answer = solve(text)
        print(answer)
    except Exception as e:
        print(e)

mainWindow = tk.Tk()

mainWindow.geometry("800x600")
mainWindow.configure(bg="#211951",padx=30,pady=30)
mainWindow.title("AI BANGLA MATH SOLVER")

imgBtn = tk.Button(master=mainWindow,text="ADD IMAGE",background="#836FFF",foreground="#F0F3FF", command=imgproccess, padx=10,pady=10)
imgBtn.pack(side=tk.TOP, anchor=tk.NE)





mainWindow.mainloop()