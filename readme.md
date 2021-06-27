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
    - Lets me fiddle with the transcribe API which I already want to do
    - Also necessitates a visualization of the data, ideally combined with all necessary assets inside a .zip linked to by the calendar entry. Bam. This is it. This is how you promote it.
        - Premise : "Hey, can I get last Friday's lecture from you?"
        - Screenshot 1 (Before/Horror) : A folder full of all sorts of ridiculous files with timestamp files and cryptic filenames
        - Screenshot 2 (After/Yay): show your voice notes directly on your calendar, with smart time stamps that give bits of context along with an easy to download/use link of either the raw audio, just timestamps, both, etc.

## BONUS XP: I want to generate a calendar file

This is for me. I want the start time and file length to pop out after uploading as a calendar file that I can click to add to my calendar. 

Ideally this could integrate some other metadata too, probably collected on same screen as the .TMK upload is. So if you name your TMK before sending it up, the calendar entry will be named accordingly. If you added GPS data, the calendar will be geolocated accordingly, etc etc etc. 

## TO INFINITY AND BEYOND

I'd like to combine this with other tools to visualize data in other interesting ways. 

Another possible use is for splitting an Eminem song precisely using button clicks, then lining all the slices up on a playlist and allowing the speed adjustment of each section individually. ie - split it till you spit it. Damn. That's actually a sick name. Maybe that should be the app. 




