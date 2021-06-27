# Audio Splitter

## BASIC: TMK to JSON converter

My Sony voice recorder has a lot of bells and whistles, but I still need to do some of the legwork myself. 

Making this to derive timestamps based on the file's metadata (birthtime) and the accompanying .tmk files.

Output is a series of timestamps that include real-world datetime and offset in milliseconds. 

## LEVEL UP: FFMPEG Script

WIP - goal is to output a json file that is easily passed along to an FFMPEG pipeline allowing for the file to be split at the timestamps. 

The purpose is two fold:

1. Allowing easier access to small parts of the larger whole for sharing etc
2. Slicing a short piece off to send to Amazon Transcribe, allowing the timestamp to offer a small amount of text based context, even without opening the section to listen. 

## BONUS XP: I want to generate a calendar file

This is for me. I want the start time and file length to pop out after uploading as a calendar file that I can click to add to my calendar. 

Ideally this could integrate some other metadata too, probably collected on same screen as the .TMK upload is. So if you name your TMK before sending it up, the calendar entry will be named accordingly. If you added GPS data, the calendar will be geolocated accordingly, etc etc etc. 

## TO INFINITY AND BEYOND

I expect to be able to make this function in as a cloud service for free 

If I have the time or if anyone ever actually uses this it would be cool to box it up as something that could be run locally on a windows machine, or whatever, and allowing them to visualize their data without uploading anything at all to the cloud. 

Obviously this'll be great for FFMPEG purposes, but I bet there's even voice to text that works fine locally these days without relying on some API.



