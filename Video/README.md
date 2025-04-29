# How to Survive a Group Project
## Project Description
How to Survive a Group Project is a humorous, multimedia experience that dramatizes the chaotic reality of student group work. We wanted to create something both funny and relatable—something that captures the rollercoaster of emotions every student goes through during group assignments. From awkward introductions to pretending to be productive, and ultimately panicking the night before the deadline, the video walks viewers through the universal steps of survival.

The overall concept is centered on presenting a narrative with exaggerated but familiar group project scenarios. The accompanying website serves as a playful platform to host our video and a simple drag-and-drop game that tests how well you understand each team member’s “survival role.

## Process
We followed a three-step concept structure:
1. Don’t Avoid and Meet the Team
2. Pretend to Be Productive
3. Panic and Pull an All-Nighter

### Planning and Filming

Planning and Filming
We created a detailed storyboard that broke the video down into individual scenes and shot sequences. Each scene was designed with comedic timing, camera angles, and shot transitions in mind to support the storytelling.

Filming equipment and setup:

- **Camera:** Canon Rebel T4i DSLR

- **Lens:** Canon 18–135mm 008 lens for versatile zoom and wide-angle options

- **Tripod:** Manfrotto 504HD, providing smooth panning and stable shots

We shot scenes in various campus locations including classrooms, the library, and the dining hall to reflect the typical university setting.

### Editing
We primarily used Adobe Premiere Pro to assemble and polish the video. Tasks included:

- **Video overlays and freeze frames:** To emphasize comedic pauses or character reactions

- **Text overlays:** For character introductions and mock "tips for success"

- **Color correction and sharpening:** Ensuring visual consistency across varied lighting conditions

- **Cutting and pacing:** Fine-tuning the comedic timing and narrative rhythm

Special editing touches:

- Character introduction snapshots were frozen and slightly slowed for dramatic and humorous effect

- The title sequence and final scene transitions were enhanced using CapCut, which allowed for faster text animation and stylized effects


### Sound Design
Audio played a major role in shaping the mood and comedic tone. Our sound design approach included:

- **Background music and effects:** Most sound elements were sourced from freesound.org, carefully selected to complement each scene's mood — from light-hearted background tunes to exaggerated sound effects for comedic emphasis.

- **Environmental sounds:** Rather than removing all ambient noise, we selectively kept natural sounds (e.g., air conditioning hums, distant chatter) and adjusted their volume to create a more immersive and relatable atmosphere.

- **Custom recordings:** We recorded specific audio clips, such as Fatima’s gaming sessions and Netflix binge-watching, to enhance realism and reinforce the characters’ personalities.

### Website Implementation
We developed a multi-page interactive website using HTML, CSS, and JavaScript, designed to complement the theme and narrative of our video project. Each page serves a specific purpose and includes interactive or multimedia elements to enhance user engagement.

##### Overview of Pages
1. **Landing Page (index.html)**

**Purpose:** Serves as the entry point of the website, introducing the project and setting the tone.

**Features:**

- A full-screen background video that auto-plays and loops for a visually engaging intro.

- A "Start" or "Enter" button that smoothly transitions users to the main video or game page.

- Minimal UI elements to maintain a cinematic feel.

2. **Video Page (video.html)**

**Purpose:** Showcases the full video with custom controls.

**Features:**

- Embedded video player with play/pause, volume, skip, and fullscreen controls implemented via JavaScript.

- A stylized layout using CSS to keep the viewer’s focus on the video.

3. **Game Page (game.html)**

**Purpose:** Offers a light interactive activity where users match characters to their roles in the project.

**Features:**

- Drag-and-drop functionality coded in JavaScript.

- Users drag character icons/cards and drop them into designated role boxes (e.g., Director, Editor, Actor).

- Feedback is provided instantly for correct or incorrect matches.

- Character images and roles are consistent with those shown in the video.

4. **Score Page (score.html)**

**Purpose:** Displays the user’s performance in the drag-and-drop game.

**Features:**

- Dynamic score display based on the number of correct matches.

- JavaScript calculates the score and optionally displays a message (“Reality of Group Projects”).

#### Source Code Files
**index.html**

- Contains the HTML structure for the landing page.

- Embeds the video background and intro button.

- Uses <video> tag with styling classes.

- Includes links to style.css and script.js.

**style.css**

Provides styling across all pages:

- Responsive layout using flexbox and grid

- Button and card styles

- Video container aesthetics

- Drag-and-drop element styling (highlighting drop zones, hover effects)

- Media queries for mobile/tablet compatibility

**script.js**

Handles all front-end interactivity:

- Video control functions (e.g., play, pause, volume)

- Drag-and-drop logic (e.g., dragstart, dragover, drop, validation)

- Score calculation and storage

- Navigation between pages and conditional display logic

- Optional enhancements like animations or sound effects

## Reflection & Evaluation
Our goal was to create a project that blends humor, relatability, and light interaction—and in many ways, we believe we achieved that. From concept to execution, we aimed to capture the chaotic, sometimes absurd process that university students go through when tackling group assignments. The final product reflects both our personalities and our collective sense of humor.

However, the process wasn’t without its challenges. One major lesson we learned early on was the importance of **pre-production planning**. We didn’t begin with a properly fleshed-out storyboard, which meant that a significant amount of time during filming was spent **improvising scenes, deciding camera angles on the spot**, and debating how to structure certain parts of the narrative. This led to **delays**, repeated takes, and a few logistical headaches—especially when coordinating between different campus locations.

Despite that, the filming experience turned out to be one of the most memorable aspects of the project. We used whatever resources we had on hand to get the shots we needed, and our team’s **flexibility and willingness to experiment** allowed us to inject spontaneity and energy into the video.

Post-production brought its own set of hurdles. We had to **sync audio manually**, work around **limited footage**, and make creative edits to ensure scenes flowed well and the tone remained consistent. Balancing technical precision (like color grading, transitions, and timing overlays) with creative decisions (like freeze frames, character intros, and comedic timing) required **close collaboration and many review cycles**. Tools like **Adobe Premiere Pro and CapCut** helped us achieve a polished final cut, even though we were working with amateur-level equipment and tight time constraints.

On the web development side, the interactive elements like the **drag-and-drop game and score page** added a playful, engaging layer to the experience. These features complemented the theme and made the project feel more like a cohesive digital piece than just a video.

Overall, we’re proud of what we created. It’s not just a project—it’s a snapshot of our creativity, teamwork, and the countless hours we spent bouncing ideas off one another (usually at midnight). Most importantly, we had fun throughout, and we’ll carry the lessons from this experience—both technical and collaborative—into our future work.


## Contributions
**Asini:** booking equipment, acting, filming, video editing
**Fatima:** writing story and shot sequence, acting, filming, website implementation and design
**Mariam:** writing story and shot sequence, acting, filming, website structure, documentation
