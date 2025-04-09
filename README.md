# Notes from the Piano
### Interactive Audio - Group Work 

1. **Project Description:** *What is the project, overall concept and theme? What kind of experience you were striving to create?* <br>
“Notes from the Piano” is an audio diary told from the perspective of a very opinionated, very emotionally complex Steinway named Susan. Over the course of a week, she documents her life as she’s moved from one chaotic situation to the next: a yoga studio, a preschool, a wedding, and a jazz session that finally treats her with the respect she deserves. Through six diary-style entries, Susan’s voice comes alive with vulnerability and musical flair.

From the beginning, our goal was to tell a playful, character focused story that merged sound design and storytelling in an engaging, unexpected way. We wanted to make listeners laugh, of course, but also feel for this piano who just wants to be understood, tuned, and treated like the mahogany-finished royalty she is.

2. **Process:** *How did you go about implementing the concept?* <br>
In implenting all of our ideas into this project, we took many strenghths from each individual and applied them where they were most effective in our project. In the interest of including everyone's opinions and preferences, our final project became a melting pot of ideas that supported a unique and creative storyline.

Each members responsibilites were as follows: <br>
1. Guli: Guli was not only the one who came up with the idea for our project but also played all the piano portions of the audio. Using her piano skills, we were able to rely entirely on original audio clips for the majority of our audio file. Guli also worked independently in editing diary entries 3 and 4.
2. Jania: Jania's responsbilities included writing the script for the audio and monitoring the recording of our original audios. Additionally, she took part in the editing process working independently on entries 5 and 6, and combining all of them (with final edits) for the final pass.
3. Raghd: Raghd's contribution to the project included voicing our piano's diary entries along with editing entries 1 and 2 of the audio file. In stepping up to narrate the audio, Raghd filled an important need in our project which also greatly contributed to the originality of our audio.
4. Miriam: Lastly, Miriam was responsible for developing the website to host our audio file on. She was able to take all of our ideas and effectively implement them into one seamless page which solidified the aesthetic of our project and added a convenient layer of interactivity. Additionally, she voiced the narration for the days of the week in our audio.

Throughout our implementation all four members contributed in all aspects of the project supporting in different areas wherever needed. The process of implementing our idea was far from simple but through effective team communication and collaboration, we successfully got it done. 

*Code Implementation* <br>
1.HTML: <br>
   - Created a single container holding six note images and an audio player section (with play/pause button, progress bar, and time display).
   - Linked external CSS and JavaScript files for styling and functionality.
2.CSS: <br>
   - Designed note images as circles with shadows.
   - Defined an active state (.active) to enlarge the note and change its border to yellow.
   - Added a pulse animation (@keyframes, pulseAnim, and .pulse) for visual emphasis.
   - Styled the audio player for clarity and ease-of-use.
3.Java Script: <br>
   - Defined an array of timestamps to segment the audio into six days.
   - Implemented event listeners:
     - Audio timeupdate: Updates the progress bar, time display, and checks which day is active.
     - Note Clicks: Makes all notes clickable, enabling navigation to the corresponding audio segment when clicked.
     - Play/Pause Button: Controls audio playback.
   - Added logic to apply the pulse animation and active state style to the note corresponding to the current diary day while the audio plays.

3. **Reflection/Evaluation:** *Were your expectations and goals met in the process of building the final working version?* <br>
Reflecting on the process, we’re really proud of what we created. When recieving feedback from friends people appreciated the character, the sound design, and especially the interactive experience that brought everything together on the web. Of course, there’s always room to grow. If we were to keep working on this, we’d focus on  improving the audio quality. Although most of it came through clearly, in some spots our levels dipped a little lower than preferred. We’d also love to develop Susan’s story even more and possibly add more musical components or deepen the emotional arc. All in all, this was a project that challenged us to combine creativity, humor, and technical skill. Susan may have had a rough week, but she lived to tell the tale. And we’re really glad we got to help her share it.
