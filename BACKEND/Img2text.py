import pytesseract
from PIL import Image, ImageEnhance, ImageFilter
'''
# Load the image and preprocess it
im = Image.open("C:\\Users\\IbneReham\\Desktop\\bangla.jpg")
im = im.filter(ImageFilter.MedianFilter())
enhancer1 = ImageEnhance.Contrast(im)
im = enhancer1.enhance(2)
im = im.convert('1')

# Set the path to the tesseract executable


# Recognize the Bangla text from the image
text = pytesseract.image_to_string(im, lang="ben")
print(text)
'''
pytesseract.pytesseract.tesseract_cmd = "C:/Program Files/Tesseract-OCR/tesseract.exe"

def img2text(path):
    im = Image.open(path)
#    im = im.filter(ImageFilter.MedianFilter())
    enhancer = ImageEnhance.Contrast(im)
    im = enhancer.enhance(1)
#    im = im.convert('1')
    return pytesseract.image_to_string(im, lang='ben')

