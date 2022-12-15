import json
import smtplib
from time import ctime
import pyttsx3
import datetime
import speech_recognition as sr
import wikipedia
import requests
import webbrowser
import os,sys
import pywhatkit as kit
import pyaudio 



engine=pyttsx3.init('sapi5')
voices = engine.getProperty('voices')


# print(voices)
engine.setProperty('voice',voices[3].id)

print(voices[3].id)

author="lalitha"

def speak(audio):
    engine.say(audio)
    engine.runAndWait()

def sendEmail(to,content):
    server=smtplib.SMTP('smtp.gmail.com',587)
    server.ehlo()
    server.starttls()
    server.login('jeediguntalalitha@gmail.com','sriram+-*')
    server.sendmail('jeediguntalalitha@gmail.com',to,content)
    server.close()
def wishMe():
    hour=int(datetime.datetime.now().hour)
    if hour>=0 and hour<12:
        speak(f"Good Morning {author}")
    elif hour>=12 and hour<16:
        speak(f"Good Afternoon {author}")
    else:
        speak(f"Good Evening {author}")
    
    speak(f"Hello ,I am Vennesa ,How may i help you")
    
def takecommend():
    '''
    take microphone input from the user and return string
    
    '''
    r=sr.Recognizer()
    with sr.Microphone() as source:
        print("listening.....")
        r.pause_threshold = 1.5
        audio=r.listen(source)
    try:
        print("Recognizing...")
        query=r.recognize_google(audio, language='en-in')
        print(f"User said:{query} \n")
    except Exception as e:
        print(f"Sorry {author},Say it again...")
        speak(f"Sorry {author},Say it again...")
        return "None"
    return query
if __name__=="__main__":
    # speak(f"welcome,I am chintu")
    wishMe()
    # takecommend()
    while True:

        if 1:
            query=takecommend().lower()
            if 'wikipedia' and 'who' in query:
                speak("searching wikipedia...")
                query=query.replace("wikipedia"," ")
                results=wikipedia.summary(query,sentences=3)
                speak("According to wikipedia")
                print(results)
                speak(results)
                
            elif 'news' in query:
                speak("News Headlines ")
                query=query.replace("news","")
                url="https://newsapi.org/v2/top-headlines?country=in&apiKey=366b73ca6bf04ed88fc31f1594f7e649"
                news=requests.get(url).text
                news=json.loads(news)
                art=news['articles']
                for article in art:
                    print(article['title'])
                    speak(article['title'])
                    
                    print(article['description'])
                    speak(article['description'])
                    speak("moving on to the next news")   
            elif 'open google' in query:
                webbrowser.open("www.google.com")
            elif 'play a game' in query:
                webbrowser.open("https://entertaininggames.club/?gclid=CjwKCAjw7p6aBhBiEiwA83fGuv5oCZHNWr8Lnu-CeTG9I2ErNT-8KhKsQcsFccTnjVu9XDQVJ-Xk8RoCYhAQAvD_BwE")
            elif 'open youtube' in query:
                webbrowser.open("www.youtube.com")
            elif 'search browser' in query:
                speak("what should i search")
                um=takecommend().lower()
                webbrowser.open(f"{um}")
            elif 'online shopping' in query:
                webbrowser.open("https://www.amazon.in/")
            elif 'learning' in query:
                webbrowser.open("https://learn.byjus.com/login")
            elif 'ip address' in query:
                ip=requests.get('http://api.ipify.org').text
                print(f"your ip address is {ip}")
                speak(f"your ip address is {ip}")
            elif 'open command prompt' in query:
                os.system("start cmd")
            elif 'open skype' in query:
                codepath="C:\\Program Files (x86)\\Microsoft\\Skype for Desktop\\Skype.exe"
                os.startfile(codepath)
            elif 'open v.s code' in query:
                codepath="C:\\Users\\Vsaas\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe"
                os.startfile(codepath)
            elif 'play music' in query:
                music_dir='C:\\Users\\Vsaas\\Desktop\\kittu\\music'
                songs=os.listdir(music_dir)
                print(songs) 
                os.startfile(os.path.join(music_dir,songs[0]))
            elif 'youtube' in query:
                speak("what should i search in youtube")
                cm=takecommend().lower()
                kit.playonyt(f"{cm}")
            elif 'send message' in query:
                speak("who do you want to send your message")
                num=input("enter your number:\n")    
                speak("what message do you want to send")        
                msg=takecommend().lower()
                speak("please enter time sir")
                H=int(input("enter hours:\n"))
                M=int(input("enter minutes:\n"))
                kit.sendwhatmsg(num,msg,H,M)
            elif 'your name' in query:
                speak("my name is Vennesa")
                print("my name is Vennesa")   
            elif 'what is today' in query:
                print(ctime())
                speak(ctime())
            elif 'send email' in query:    
                speak("what message do you want to send")        
                content=takecommend().lower()
                speak("whom to send you the email,enter the email address")
                to = input(" enter email address: \n ")
                sendEmail(to,content)
            # elif 'who are you' or 'define youself' in query:
            #     speak("Hello, I am Your personal Assistant I am here to make your life easier. You can command me to perform various tasks")
            # elif "weather" in query:
            #         api_key="Apply your unique ID"
            #         base_url="https://api.openweathermap.org/data/2.5/weather?"
            #         speak("what is the city name")
            #         city_name=takecommend().lower()
            #         complete_url=base_url+"appid="+api_key+"&q="+city_name
            #         response = requests.get(complete_url)
            #         x=response.json()
            #         if x["cod"]!="404":
            #             y=x["main"]
            #             current_temperature = y["temp"]
            #             current_humidiy = y["humidity"]
            #             z = x["weather"]
            #             weather_description = z[0]["description"]
            #             speak(" Temperature in kelvin unit is " +
            #                 str(current_temperature) +
            #                 "\n humidity in percentage is " +
            #                 str(current_humidiy) +
            #                 "\n description  " +
            #                 str(weather_description))
            #             print(" Temperature in kelvin unit = " +
            #                 str(current_temperature) +
            #                 "\n humidity (in percentage) = " +
            #                 str(current_humidiy) +
            #                 "\n description = " +
            #                 str(weather_description))
            elif "stop" in query:
                speak("ok closing program, if you want any information you can call me again an")
                sys.exit()
            # elif 'location' in query:
            #    speak("what is your searching location")
            #    cm=takecommend().lower()
            #    url="https://www.google.nl/maps/place/"+ cm +'/&amp;'
            #    webbrowser.open(f"{cm}")
            #    print('here is the location '+cm)           
 
      
            
        
            
        
            
    

